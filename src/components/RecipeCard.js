import React from 'react';
import recipe1 from './../assets/recipe1.jpg'

export default function RecipeCard() {
  return (
  <div className='card-container'>
      <div className='top-container'>
        <img src={recipe1} alt='home-made dish' width='25%'/>
        <div className='recipe-info'>
            <h1>Recipe Name</h1>
            <p>Source: Grandma Betty</p>
            <p>Serves: 3-4 People</p>
            <p>Prep Time: 30 mins</p>
            <p>Cook Time: 45 mins</p>
        </div>
      </div>

      <div className='bottom-container'>
        <div className='ingredients'>
            <ul>
                <li>ingredient 1</li>
                <li>ingredient 2</li>
                <li>ingredient 3</li>
                <li>ingredient 4</li>
                <li>ingredient 5</li>
                <li>ingredient 6</li>
                {/* build ingredient component to map out list of ingredients */}
            </ul>
        </div>
        <div className='instructions'>
            <ol>
                <li>instruction 1</li>
                <li>instruction 2</li>
                <li>instruction 3</li>
                <li>instruction 4</li>
                <li>instruction 5</li>
            </ol>
        </div>
      </div>
  </div>);
}
