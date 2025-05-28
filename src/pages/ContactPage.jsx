import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#D9EAFD',
        fontFamily: 'Jockey One, sans-serif',
        color: '#163D61',
        paddingTop: '30px',
        paddingBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link to="/" className="go-home-button">Go Back Home</Link>
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '20px',
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>
          Contact Us
        </h1>
        <p style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '30px' }}>
          Got a question? Need more help? We're always here to listen.
        </p>

        <div style={{ minHeight: '500px' }}>
          {!submitted ? (
            <>
              <div style={{ textAlign: 'center', fontSize: '1.6rem', marginBottom: '30px' }}>
                <p>📧 Email: <strong>support@penguinsteps.com</strong></p>
                <p>☎️ Phone: <strong>1-800-PENGUIN</strong></p>
              </div>

              <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '1.6rem', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '1.1rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontFamily: 'Jockey One, sans-serif'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ fontSize: '1.6rem', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                    Your Email:
                  </label>
                  <input
                    type="email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '1.1rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontFamily: 'Jockey One, sans-serif'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ fontSize: '1.6rem', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                    How can we help you?
                  </label>
                  <textarea
                    required
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '1.1rem',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontFamily: 'Jockey One, sans-serif'
                    }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '20px',
                      width: '50%',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      backgroundColor: '#163D61',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontFamily: 'Jockey One, sans-serif'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div style={{
              textAlign: 'center',
              fontSize: '1.9rem',
              color: '#163D61',
              marginTop: '40px',
              fontFamily: 'Jockey One, sans-serif',
            }}>
              Thank you! We'll get back to you shortly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
