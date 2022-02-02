import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
  <div>

    <form>

          <div className='formTitle'>
              <h1>Login</h1>
          </div>

          <div className='errors-container'>
          </div>

          <div className='email-input'>
              <label>Email
              <input name='email' type='text'/>
              </label>
          </div>

          <div className='password-input'>
              <label>Password
              <input name='password' type='password'/>
              </label>
          </div>

          <div className='submit'>
                <button>Login</button>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          </div>

      </form>

  </div>);
}
