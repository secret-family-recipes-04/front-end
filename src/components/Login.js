import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import chef from './../assets/chefpeppers.png'

export default function Login({ setLoggedIn }) {
    const navigate = useNavigate();
    const [cred, setCred] = useState({email: '', password: ''});

    const handleChange = e =>{
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('https://secret-family-recipe-bw.herokuapp.com/api/auth/login', cred)
        .then(res=>{
            console.log('result', res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', cred.email);
            setLoggedIn(true)
            navigate('/recipes');
        })
        .catch(err=>{
            console.log(err);
        })

        
    }

  return (
  <div className='form-container'>
    
    <form className='login-form' onSubmit={handleSubmit}>
            
          <div className='formTitle'>
              <h1>Sign In</h1>
          </div>

          <div className='errors-container'>
          </div>

          <div className='email-input'>
              <label>Email
              <input onChange={handleChange} name='email' type='text'/>
              </label>
          </div>

          <div className='password-input'>
              <label className='form-spacing'>Password
              <input onChange={handleChange} name='password' type='password'/>
              </label>
          </div>

          <div className='submit'>
                <button>Login</button>
                <p className='form-redirect'>Don't have an account? <Link className='Link' to='/signup'>Sign up</Link></p>
          </div>

      </form>
    <div className='form-img'>
        <img src={chef} alt='chef illustration'/>
    </div>
  </div>);
}
