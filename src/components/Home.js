import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/signup');
  }

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
        <button onClick={handleClick}>sign up</button>
    </div>

  </div>);
}
