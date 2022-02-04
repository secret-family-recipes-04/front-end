import React from 'react';
import { useNavigate } from 'react-router-dom'
import cooking from './../assets/cooking.png'
import HomeSectionOne from './HomeSectionOne';
import HomeSectionTwo from './HomeSectionTwo';
import HomeSectionThree from './HomeSectionThree';
import arrow from './../assets/arrow.png';

export default function Home() {

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/signup');
  }

  return (
    <div className='container'>
        <section className='home-container'>
          
          <div className='home-left'>
            <div className='home-text'>
                <h1>Welcome to SFR — a secure app to digitize and store your recipes.</h1>
            </div>

            <div className='home-details'>
                <p>
                We believe family recipes are a part of your legacy and they deserve to be kept alive. From your grandma's classic carrot cake to your dad's famous barbecue ribs, you can digitize, update, and safely store all of your beloved recipes for easy access and peace of mind. 
                </p>
                
            </div>
            
            <div className='home-button'>
                <button onClick={handleClick}>sign up</button>
            </div>
            
            <div className='scroll'>
                  <p>(scroll down)</p>
            </div>
          </div>

          <img className='home-right' src={cooking} alt='illustration'/>

        </section>

        <HomeSectionOne/>
        <HomeSectionTwo/>
        <HomeSectionThree/>
    </div>);
}
