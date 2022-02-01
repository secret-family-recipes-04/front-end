import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import myRecipeList from './../mocks/DummyData';

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
          <a href='#'>
              <h2>+</h2>
              <p>Add recipe</p>
          </a>
      </div>
  </div>);
}
