import React from "react";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#D9EAFD',
      padding: '120px 25px 40px',
      fontFamily: "'Jockey One', sans-serif",
      color: '#4A5B6A',
      boxSizing: 'border-box',
      maxWidth: '100vw',
      overflowX: 'hidden',
    }}>
      <Link to="/" className="go-home-button">Go Back Home</Link>
      <div style={{ 
        maxWidth: '600px', // narrower for shorter lines
        margin: '0 auto', 
        padding: '0 20px',
        boxSizing: 'border-box',
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '3rem',
          marginTop: '10px',
          marginBottom: '30px',
          color: '#4A5B6A',
        }}>
          About PenguinSteps
        </h1>

        <h2 style={{
          textAlign: 'center',
          fontStyle: 'normal',
          color: '#1a3c5d',
          fontSize: '2rem',
          marginBottom: '40px',
        }}>
          Guiding you through life's how-tos.
        </h2>

        <p style={{
          fontSize: '1.6rem',
          lineHeight: '1.6',
          marginBottom: '25px',
          textAlign: 'left',
          color: '#4A5B6A',
        }}>
          PenguinSteps is your friendly guide to everyday questions. Whether you want to cook a recipe, fill out a form, or understand something new, we are here to help. We break it down step by step.
        </p>

        <p style={{
          fontSize: '1.6rem',
          lineHeight: '1.6',
          marginBottom: '25px',
          textAlign: 'left',
          color: '#4A5B6A',
        }}>
          We believe learning never stops. Everyone deserves clear and simple answers. There is no rush or stress — just support at your own pace.
        </p>

        <p style={{
          fontSize: '1.6rem',
          lineHeight: '1.6',
          marginBottom: '15px',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#4A5B6A',
        }}>
          Our Mission:
        </p>

        <p style={{
          fontSize: '1.6rem',
          lineHeight: '1.6',
          marginBottom: '25px',
          textAlign: 'left',
          color: '#4A5B6A',
        }}>
          Helping you get clear, helpful info that’s easy to use — no stress, no confusion.
          <br />  
          🐧 No stress, no confusion.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
