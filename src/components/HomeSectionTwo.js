import React from 'react';
import pastries from './../assets/pastries.png';


export default function HomeSectionTwo() {
  return <section className='preview-recipes' id='blue'>
        <div className='split-right'>
            <h1>Then, update your recipes whenever you need to make adjustments like add new secret ingredients or update quantities for larger serving sizes  </h1>
            <p className='keep-scrolling'>(keep scrolling)</p>
        </div> 

        <div className='split-left'>
         <img className='screenshot' src={pastries} alt='recipe list'/>
        </div>
             
  </section>;
}
