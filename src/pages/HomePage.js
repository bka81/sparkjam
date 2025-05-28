import './HomePage.css';
import CardOption from '../components/CardOption';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function HomePage() {
  const [fontSize, setFontSize] = useState(100);
  const [brightness, setBrightness] = useState(100);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}%`);
    document.documentElement.style.setProperty('--brightness', `${brightness}%`);
  }, [fontSize, brightness]);

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-left">
          <h1>Get Clear Answers with PenguinSteps</h1>
          <br />
          <p>Guiding you through life's little how-tos.</p>
        </div>
        <div className="hero-right">
          <div className="penguin-wrapper">
            <img src="/ellipse.png" alt="Ellipse" className="ellipse-image" />
            <img src="/penguin.png" alt="Penguin Mascot" className="hero-image" />
          </div>
        </div>
      </section>

      <div className="settings-panel">
        <div className="slider-group">
        <label htmlFor="fontSizeSlider">
          <i className="fas fa-text-height icon-colored"></i> Font Size <span className="slider-value">{fontSize}%</span>
        </label>

          <div className="slider-wrapper">
            <input
              id="fontSizeSlider"
              type="range"
              min="80"
              max="150"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              step="1"
            />
            <div className="slider-default-line" style={{ left: '50%' }}></div>
          </div>
          {fontSize !== 100 && (
            <button className="reset-btn" onClick={() => setFontSize(100)}>
              Reset to 100%
            </button>
          )}
        </div>

        <div className="slider-group">
        <label htmlFor="brightnessSlider">
          <i className="fas fa-sun icon-colored"></i> Brightness <span className="slider-value">{brightness}%</span>
        </label>


          <div className="slider-wrapper">
            <input
              id="brightnessSlider"
              type="range"
              min="80"
              max="110"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              step="1"
            />
            <div className="slider-default-line" style={{ left: '50%' }}></div>
          </div>
          {brightness !== 100 && (
            <button className="reset-btn" onClick={() => setBrightness(100)}>
              Reset to 100%
            </button>
          )}
        </div>
      </div>

      <div className="homepage-bottom">
        <section className="cards-section">
          <CardOption
            title="Fill a Form"
            description="Use a simple form to describe your question clearly."
            route="/form"
            image="/form.svg"
          />
          <CardOption
            title="Talk to Assistant"
            description="Chat with our assistant and get step-by-step help like talking to a friend."
            route="/assistant"
            image="/assistant.svg"
          />
        </section>

        <footer className="footer">
          <div className="links-to-about-contact">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
