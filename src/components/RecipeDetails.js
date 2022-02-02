import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import myRecipeList from './../mocks/DummyData';


export default function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(myRecipeList[id - 1])
    

    // useEffect(()=>{
    //   make axios call here and set recipe
    // }, [])

    const handleClick = ()=>{
      navigate(`/recipes/edit/${recipe.id}`)
    }

  return (
  <div className='details-container'>
      <div className='top-container'>
        <img src={recipe.image} alt='home-made dish' width='25%'/>
        <div className='recipe-info'>
            <h1>{recipe.name}</h1>
            <p>Source: {recipe.source}</p>
            <p>Serves {recipe.serves}</p>
            <p>Prep Time: {recipe.prepTime}</p>
            <p>Cook Time: {recipe.cookTime}</p>
            <div>
              <button onClick={handleClick}>edit</button>
              <button>remove</button>
            </div>
        </div>
      </div>

      <div className='bottom-container'>
        <div className='ingredients'>
            <ul>
                {recipe.ingredients.map(ingredient=>{
                  return <li>{ingredient}</li>
                })}
            </ul>
        </div>
        <div className='instructions'>
            <ol>
                {recipe.instructions.map(instruction=>{
                  return <li>{instruction}</li>
                })}
            </ol>
        </div>
      </div>
  </div>);
}
