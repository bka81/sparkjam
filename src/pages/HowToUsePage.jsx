import React from "react";

const HowToUse = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#D9EAFD',
      padding: '5px 0'
    }}>
      {/* Content container */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '40px', 
        fontFamily: 'Jockey One, sans-serif',
        borderRadius: '8px',
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          marginBottom: '30px',
          color: '#163D61'
        }}>
          How to Use PenguinSteps
        </h1>

        <ol style={{
          fontSize: '1.6rem',
          lineHeight: '1.6',
          marginBottom: '40px',
          paddingLeft: '20px',
          color: '#163D61'
        }}>
          <li style={{ marginBottom: '15px' }}>Type your question in the box on the home page.</li>
          <li style={{ marginBottom: '15px' }}>Example: "How do I send a text message?"</li>
          <li style={{ marginBottom: '15px' }}>Click the "Ask Now" button.</li>
          <li style={{ marginBottom: '15px' }}>You'll see a clear, step-by-step explanation.</li>
          <li style={{ marginBottom: '15px' }}>If it helps, click "Read About" to hear it.</li>
          <li style={{ marginBottom: '15px' }}>You can adjust font size or screen buttons anytime.</li>
          <li style={{ marginBottom: '15px' }}>Still unsure? Just type your question and we'll guide you.</li>
        </ol>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px',
          marginTop: '30px'
        }}>
          {[ 'Ask Now', 'Read About' ].map((label) => (
            <button key={label} style={{ 
              padding: '20px 30px',
              fontSize: '1.3rem',
              backgroundColor: '#4A5B6A',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontFamily: 'Jockey One, sans-serif',
              minWidth: '160px'
            }}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
