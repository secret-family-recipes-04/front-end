import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import myRecipeList from './../mocks/DummyData';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  return (
  <div className='recipe-list-container'>
      <div className='list-header'>
      <h1 id='my-recipes'>My Recipes</h1>
      {/* <img src={recipe} alt='recipe illustration'/> */}
      </div>

      <div className='list-container'>
          {myRecipeList.map(recipe=>{
              return <RecipeCard recipe={recipe} key={recipe.id}/>
          })}
      
      <div id='add-recipe'>
          <Link to='/recipes/add'>
              <h2> + </h2>
              <p>Add recipe</p>
          </Link>
      </div>
      
    </div>
  </div>);
}
