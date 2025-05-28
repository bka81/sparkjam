import React from 'react';
import './ConfirmationPage.css';

function ConfirmationPage() {
  return (
    <div className='formcontainer'>
      <h1>Form Submitted!</h1>
      <h2>Thank you for using PenguinSteps! We will get back to you shortly</h2>
      <img src="/penguin.png" alt="Penguin Mascot" width={320} height={320} />
    </div>
  );
}

export default ConfirmationPage;
