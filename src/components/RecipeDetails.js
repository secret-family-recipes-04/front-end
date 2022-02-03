import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import chef from './../assets/chefandcat.png'
import myRecipeList from './../mocks/DummyData';


export default function RecipeDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(myRecipeList[id - 1])

    // useEffect(()=>{
    //   make axios call here and set recipe
    // }, [])

    const handleEditClick = ()=>{
      navigate(`/recipes/edit/${recipe.id}`)
    }

    const handleListClick = ()=>{
      navigate('/recipes')
    }

  return (
  <div className='details-container'>
      
      <div className='top-container'>
        
        <img src={recipe.image} alt='home-made dish' width='25%'/>
        <div className='recipe-info'>
          <div className='recipe-info-text'>
            <div>
            <h1>{recipe.name}</h1>
            <p>Source: {recipe.source}</p>
            <p>Serves {recipe.serves}</p>
            <p>Prep Time: {recipe.prepTime}</p>
            <p>Cook Time: {recipe.cookTime}</p>
            </div>

            <img src={chef} alt='illustration'/>
            
          </div>
            <div className='button-container'>
              <button onClick={handleEditClick}>edit</button>
              <button>remove</button>
              
              {/* <button onClick={handleListClick}>recipe list</button> */}
            </div><Link id='to-recipe-list' to='/recipes'>back to recipe list</Link>
        </div>
      </div>

      <div className='bottom-container'>
        <div className='ingredients'>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map(ingredient=>{
                  return <li>{ingredient}</li>
                })}
            </ul>
        </div>
        <div className='instructions'>
            <h3>Instructions</h3>
            <ol>
                {recipe.instructions.map(instruction=>{
                  return <li>{instruction}</li>
                })}
            </ol>
        </div>
      </div>
  </div>);
}
