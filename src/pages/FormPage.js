//import { useState } from 'react';
import React, {useState} from 'react';

import './FormPage.css';

function FormPage() {
  const [values, setValues] = useState({
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:'',
    preferredmethodofcontact:'',
    aboutquestion:'',
    inquirybox:''
  })

  //used to update the values 
  const handleChanges = (e) => {
    setValues({...values,[e.target.name]:[e.target.value]})

  }
  
  //prevent the default submission
  const handleSubmit = (e) => {
    e.preventDefault()
    //use api here to pass the data 
    console.log(values)
  }

    return (
      <div className='container'>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstname'>First Name</label>
          <input type='text'placeholder='Enter First Name' name='firstname'
          onChange={(e) => handleChanges(e)} required/>

          <label htmlFor='lastname'>Last Name</label>
          <input type='text'placeholder='Enter Last Name' name='lastname'
          onChange={(e) => handleChanges(e)} required/>

          <label htmlFor='email'>Email</label>
          <input type='email'placeholder='Enter Your Email' name='email'
          onChange={(e) => handleChanges(e)} required/>
        
          <label htmlFor='phonenumber'>Phone Number</label>
          <input type='text'placeholder='(000) - 000 - 000' name='phonenumber'
          onChange={(e) => handleChanges(e)} required/>
      
          <label htmlFor='preferredmethodofcontact'>Preferred Method Of Contact</label>
          <input type='radio' name='phonenumberoption'
          onChange={(e) => handleChanges(e)}/>Phone Number

          <input type='radio' name='emailoption'
          onChange={(e) => handleChanges(e)}/>Email
          
          <input type='radio' name='zoomoption'
          onChange={(e) => handleChanges(e)}/>Zoom Meeting

          
          <label htmlFor='aboutquestion'>What is your question about? (optional)</label>
          <select name ='aboutquestion' id='aboutquestion' onChange={(e) => handleChanges(e)}>
            <option value ='testing'>Select a topic </option>
            <option value ='email'>Email</option>
            <option value ='internet'>Internet</option>
            <option value ='app'>App</option>
            <option value ='mobilephone'>Mobile Phone</option>
            <option value ='accounts'>Accounts</option>
            <option value ='other'>Other</option>
          </select>
          
          {/*implement the voice option here*/}
          
          {/*implement how soon the response is needed here*/}


          <label htmlFor='inquirybox'>Question</label>
          <textarea name='inquirybox' id='inquirybox' cols='30' rows='10'
          onChange={(e) => handleChanges(e)} placeholder='Please type in your question in the following box :)'></textarea>

          <button type='submit'>Submit</button>


        </form>


      </div>
    );

  }
  
export default FormPage;