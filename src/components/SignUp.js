import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
        email: '',
        password: ''
    };

const initialFormErrors = {
    email: '',
    password: ''
}

export default function SignUp() {

   const [formValues, setFormValues] = useState(initialFormValues);
   const [formErrors, setFormErrors] = useState(initialFormErrors);
   const navigate = useNavigate();

   const signUp = ()=>{
       axios.post('https://secret-family-recipe-bw.herokuapp.com/api/users/signup', {
           'email': formValues.email,
           'password': formValues.password
       })
       .then(res=>{
           console.log('sign up post req result:', res);
        //    navigate('/login');
       })
       .catch(err=>{
           console.log(err);
       })
   }

   const handleChange = e=>{
       setFormValues({
           ...formValues,
           [e.target.name]: e.target.value
       })
   }

   console.log('form values', formValues);

   const handleSubmit = e=>{
       e.preventDefault();
       console.log('handleSubmit form values:', formValues);
       signUp();
   }

  return (
  <div>
      <form onSubmit={handleSubmit}>

          <div className='formTitle'>
              <h1>Sign Up</h1>
          </div>

          <div className='errors-container'>
          </div>

          <div className='email-input'>
              <label>Email
              <input onChange={handleChange} name='email' type='text'/>
              </label>
          </div>

          <div className='password-input'>
              <label>Password
              <input onChange={handleChange} name='password' type='password'/>
              </label>
          </div>

          <div className='submit'>
                <button>Sign Up</button>
                <p>Already have an account? <Link to='/login'>login</Link></p>
          </div>

      </form>
  </div>);
}
