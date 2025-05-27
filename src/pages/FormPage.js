//referenced this video for the speech option https://www.youtube.com/watch?v=xJ_V55awyIo&t=3s
import React, { useState } from 'react';
import './FormPage.css';
import VoiceInput from './VoiceInput'; // Make sure this path is correct

function FormPage() {
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
    console.log(values);
    // API call or form submission logic goes here
  };

  return (
    <div className='container'>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name</label>
        <input
          type='text'
          placeholder='Enter First Name'
          name='firstname'
          onChange={handleChanges}
          required
        />

        <label htmlFor='lastname'>Last Name</label>
        <input
          type='text'
          placeholder='Enter Last Name'
          name='lastname'
          onChange={handleChanges}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='Enter Your Email'
          name='email'
          onChange={handleChanges}
          required
        />

        <label htmlFor='phonenumber'>Phone Number</label>
        <input
          type='text'
          placeholder='(000) - 000 - 000'
          name='phonenumber'
          onChange={handleChanges}
          required
        />

        <label htmlFor='preferredmethodofcontact'>Preferred Method Of Contact</label>
        <div>
          <input
            type='radio'
            name='preferredmethodofcontact'
            value='phone'
            onChange={handleChanges}
          /> Phone Number

          <input
            type='radio'
            name='preferredmethodofcontact'
            value='email'
            onChange={handleChanges}
          /> Email

          <input
            type='radio'
            name='preferredmethodofcontact'
            value='zoom'
            onChange={handleChanges}
          /> Zoom Meeting
        </div>

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

        {/* <label htmlFor='questiondeliverymethod'>How Would you like to ask your question?</label>
        <div>
          <input
            type='radio'
            name='writtenquestion'
            value='writtenquestion'
            onChange={handleChanges}
          /> I want to type it out myself

          <input
            type='radio'
            name='spokenquestion'
            value='spokenquestion'
            onChange={handleChanges}
          /> I want to record it
        </div> */}

        <label htmlFor='preferredmethodofcontact'>How would you like to ask your question?</label>
        <div>
          <input
            type='radio'
            name='preferredmethodofcontact'
            value='phone'
            onChange={handleChanges}
          /> I want to type it out

          <input
            type='radio'
            name='preferredmethodofcontact'
            value='email'
            onChange={handleChanges}
          /> I want to say it out loud
        </div>


        <label htmlFor='inquirybox'>If typing, please write your question in the following box ☺</label>
        <textarea
          name='inquirybox'
          id='inquirybox'
          cols='30'
          rows='10'
          value={values.inquirybox}
          onChange={handleChanges}
        ></textarea>

        {/* 🎤 Voice Input for Inquiry Box */}
        <label htmlFor='inquirybox'>If speaking, press the following button</label>
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

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
