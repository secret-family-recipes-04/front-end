import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
  <div>
      <form>

          <div className='formTitle'>
              <h1>Sign Up</h1>
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
                <button>Sign Up</button>
                <p>Already have an account? <Link to='/login'>login</Link></p>
          </div>

      </form>
  </div>);
}
