import React from 'react';
import recipe1 from './../assets/recipe1.jpg';

export default function RecipeCard(props) {

    const { recipe } = props

  return (
  <div className='recipe-card-container'>
      <img src={recipe.image} alt='home-made dish' width='25%'/>
      <div className='recipe-card-info'>
          <div className='recipe-labels'>
              <h4>{recipe.name}</h4>
          </div>

          <div className='recipe-card-links'>
              <a href='#'>edit</a>
              <a href='#'>remove</a>
          </div>
      </div>
  </div>);
}
