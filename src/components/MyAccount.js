import React from 'react';

export default function MyAccount() {
  return (
  <div>

    <form>

    <div className='formTitle'>
        <h1>Account Info</h1>
    </div>

    <div className='errors-container'>
    </div>

    <div className='email-input'>
        <label>Update Email
        <input name='email' type='text'/>
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
