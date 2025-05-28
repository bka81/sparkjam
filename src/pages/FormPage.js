//referenced this video for the speech option https://www.youtube.com/watch?v=xJ_V55awyIo&t=3s
import React, { useState } from 'react';
import './FormPage.css';
import VoiceInput from './VoiceInput'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage';

function FormPage() {
  const navigate = useNavigate(); 


  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    preferredmethodofcontact: '',
    aboutquestion: '',
    inquirybox: ''
  });
  



  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submitted values:', values);
  navigate('/confirmation');
};


  return (
    <div className='container'>
      <h1>Question Form</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor='firstname'>First Name 👤</label>
        <input
          type='text'
          placeholder='Enter First Name'
          name='firstname'
          onChange={handleChanges}
          required
        />
        <br></br>

        <label htmlFor='lastname'>Last Name 👤</label>
        <input
          type='text'
          placeholder='Enter Last Name'
          name='lastname'
          onChange={handleChanges}
          required
        />
      <br></br>
        <label htmlFor='email'>Email 📧</label>
        <input
          type='email'
          placeholder='Enter Your Email'
          name='email'
          onChange={handleChanges}
          required
        />
        <br></br>
        <label htmlFor='phonenumber'>Phone Number ☎️</label>
        <input
          type='text'
          placeholder='(000) - 000 - 000'
          name='phonenumber'
          onChange={handleChanges}
          required
        />
          <br></br>
        <label htmlFor='preferredmethodofcontact'>Preferred Method Of Contact?</label>
        <div>
          <label>
            <input
              type='radio'
              name='preferredmethodofcontact'
              value='phone'
              onChange={handleChanges}
            />
            <span>Phone Number</span>
          </label>

          <label>
            <input
              type='radio'
              name='preferredmethodofcontact'
              value='email'
              onChange={handleChanges}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              type='radio'
              name='preferredmethodofcontact'
              value='zoom'
              onChange={handleChanges}
            />
            <span>Zoom Meeting</span>
          </label>
        </div>
        <br />


        
        
        <br></br>

        <label htmlFor='aboutquestion'>What is your question about? (optional)</label>
        <select
          name='aboutquestion'
          id='aboutquestion'
          onChange={handleChanges}
        >
          <option value=''>Select a topic</option>
          <option value='email'>Email</option>
          <option value='internet'>Internet</option>
          <option value='app'>App</option>
          <option value='mobilephone'>Mobile Phone</option>
          <option value='accounts'>Accounts</option>
          <option value='other'>Other</option>
        </select>

          <br></br>

        <label htmlFor='inquirybox'>Please write your question in the following box, otherwise press the speak button ☺</label>
        <VoiceInput
          value={values.inquirybox}
          onVoiceInputComplete={(spokenText) => {
            setValues((prevValues) => ({
              ...prevValues,
              inquirybox:
                prevValues.inquirybox +
                (prevValues.inquirybox ? ' ' : '') +
                spokenText
            }));
          }}

        />

      
        <br />
        <button type='submit' onClick={() => navigate(ConfirmationPage)}>Submit</button>
      </form>
    </div>
  );
}

export default FormPage;




