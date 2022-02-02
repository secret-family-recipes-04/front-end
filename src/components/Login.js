import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
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
        axios.post('http://bw.herokuapp.com/api/users', cred)
        .then(res=>{
            console.log('result', res);
            // localStorage.setItem('token', res.data.token);
            // navigate('/recipes');
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
  <div>

    <form onSubmit={handleSubmit}>

          <div className='formTitle'>
              <h1>Login</h1>
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
                <button>Login</button>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          </div>

      </form>

  </div>);
}
