import './HomePage.css';
import CardOption from '../components/CardOption';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>Get Clear Answers with PenguinSteps</h1>
          <br></br>
          <p>
            Guiding you through life's little how-tos.
          </p>
        </div>
        <div className="hero-right">
          <div className="penguin-wrapper">
            <img src="/ellipse.png" alt="Ellipse" className="ellipse-image" />
            <img src="/penguin.png" alt="Penguin Mascot" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 320">
          <path fill="#F8FAFC" fillOpacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,202.7C672,224,768,224,864,192C960,160,1056,96,1152,85.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L0,320Z">
          </path>
        </svg>
      </div>

      {/* Card Options */}
      <section className="cards-section">
        <CardOption
          title="Fill a Form"
          description="Use a simple form to describe your question clearly."
          route="/form"
          image="/form.jpeg"
        />
        <CardOption
          title="Talk to Assistant"
          description="Chat with our assistant and get step-by-step help like talking to a friend."
          route="/assistant"
          image="/assistant.jpeg"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="links-to-about-contact">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
