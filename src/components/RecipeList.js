import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import myRecipeList from './../mocks/DummyData';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  return (
  <div className='recipe-list-container'>
      <h1>My Recipes</h1>
      <div className='list-container'>
          {myRecipeList.map(recipe=>{
              return <RecipeCard recipe={recipe} key={recipe.id}/>
          })}
      </div>
      <div id='add-recipe'>
          <Link to='/recipes/add'>
              <h2>+</h2>
              <p>Add recipe</p>
          </Link>
      </div>
  </div>);
}
