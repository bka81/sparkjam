//referenced this video for the speech option https://www.youtube.com/watch?v=xJ_V55awyIo&t=3s
import React, { useState } from 'react';
import './FormPage.css';
import VoiceInput from './VoiceInput';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

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

  const sendEmail = async () => {
    const templateParams = {
      name: `${values.firstname} ${values.lastname}`,
      title: values.inquirybox,
      to_email: values.email
    };

    console.log("📤 Attempting to send email with params:", templateParams);

    try {
      const result = await emailjs.send(
        'service_omwxtv5',
        'template_l5r632o',
        templateParams,
        'zfhMwQs6VBNKc9xEu'
      );
      console.log('✅ Email sent successfully:', result.text);
      return true;
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      alert('Failed to send email. Please check console for details.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('📋 Submitted form values:', values);
    const emailSent = await sendEmail();

    if (emailSent) {
      navigate('/confirmation');
    }
  };

  return (
    <div className='container'>
      <Link to="/" className="go-home-button">Go Back Home</Link>
      <h1>Question Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name 👤</label>
        <input
          type='text'
          placeholder='Enter First Name'
          name='firstname'
          onChange={handleChanges}
          required
        />
        <br />

        <label htmlFor='lastname'>Last Name 👤</label>
        <input
          type='text'
          placeholder='Enter Last Name'
          name='lastname'
          onChange={handleChanges}
          required
        />
        <br />

        <label htmlFor='email'>Email 📧</label>
        <input
          type='email'
          placeholder='Enter Your Email'
          name='email'
          onChange={handleChanges}
          required
        />
        <br />

        <label htmlFor='phonenumber'>Phone Number ☎️</label>
        <input
          type='text'
          placeholder='(000) - 000 - 000'
          name='phonenumber'
          onChange={handleChanges}
          required
        />
        <br />

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
        <br />

        <label htmlFor='inquirybox'>Please write your question in the following box, otherwise press the speak button ☺</label>
        <VoiceInput
          value={values.inquirybox}
          onChange={(e) =>
            setValues((prevValues) => ({
              ...prevValues,
              inquirybox: e.target.value
            }))
          }
          onVoiceInputComplete={(spokenText) =>
            setValues((prevValues) => ({
              ...prevValues,
              inquirybox: spokenText
            }))
          }
        />
        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
