import React from 'react';

export default function Home() {
  return (
  <div className='home-container'>

    <div className='home-text'>
        <h1>Welcome to SFR — a secure app to digitize and store your recipes.</h1>
    </div>

    <div className='home-details'>
        <p>
        We believe family recipes are a part of your legacy and they deserve to be kept alive.
        </p>
    </div>

    <div className='home-button'>
        <button>sign up</button>
        <p>login</p>
    </div>

  </div>);
}
