import React from 'react';
import cat from './../assets/cat.png';
import { Link } from 'react-router-dom';


export default function HomeSectionThree() {
  return <section className='preview-recipes' id='orange'>
        <div className='split-left'>
        <img className='screenshot' src={cat} alt='recipe list'/>
        </div> 

        <div className='split-right'>
         <h1>Finally, Access your secret family recipes whenever you get the urge to whip up a family classic </h1>
         <Link to='/signup'><p className='keep-scrolling' id='signUpHere'>sign up here</p></Link>
        </div>
             
  </section>;
}