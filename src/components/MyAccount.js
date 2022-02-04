import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useNavigate } from 'react-router-dom';

export default function MyAccount() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: localStorage.getItem('email'),
    password: ''
  });

  const handleChange = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
}

  const handleSubmit = e =>{
    e.preventDefault();
    navigate(-1)
  }

useEffect(()=>{
  setUser(user)
},[]);


  return (
  <div className='form-container'>

    <form onSubmit={handleSubmit}>

    <div className='formTitle'>
        <h1>Account Info</h1>
    </div>

    <div className='errors-container'>
    </div>

    <div className='email-input'>
        <label>Update Email
        <input name='email' type='text' value={user.email} onChange={handleChange}/>
        </label>
    </div>

    <div className='password-input'>
        <label>Current Password
        <input name='password' type='password'/>
        </label>
    </div>

    <div className='password-input'>
        <label>Confirm Current Password
        <input name='password' type='password'/>
        </label>
    </div>

    <div className='password-input'>
        <label>Update Password
        <input name='password' type='password'/>
        </label>
    </div>

    <div className='submit'>
          <button>Save</button>
    </div>

    </form>

  </div>);
}
