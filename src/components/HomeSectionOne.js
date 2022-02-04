import React from 'react';
import doggo from './../assets/doggo.png';


export default function HomeSectionOne() {
  return <section className='preview-recipes'>
        <div className='split-left'>
        <img className='screenshot' src={doggo} alt='recipe list'/>
        </div> 

        <div className='split-right'>
         <h1>First, Enter your recipe ingredients, instructions, and source for safe keeping </h1>
         <p className='keep-scrolling'>(keep scrolling)</p>
        </div>
             
  </section>;
}
