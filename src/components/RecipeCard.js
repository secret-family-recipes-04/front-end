import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard(props) {

    const { recipe } = props

  return (
  <div className='recipe-card-container'>
      <img src={recipe.image} alt='home-made dish' width='25%'/>
      <div className='recipe-card-info'>
          <div className='recipe-labels'>
              <Link to={`/recipes/${recipe.id}`} ><h4>{recipe.name}</h4></Link>
          </div>

          <div className='recipe-card-links'>
              <Link to={`/recipes/edit/${recipe.id}`}>edit</Link>
              <a href='#'>remove</a>
          </div>
      </div>
  </div>);
}
