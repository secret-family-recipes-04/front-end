import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import myRecipelist from '../mocks/DummyData';

export default function EditRecipeForm(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setRecipes } = props;

  const [recipe, setRecipe] = useState({
      id: '',
      name: '',
      source: '',
      serves: '',
      prepTime: '',
      cookTime: '',
      ingredients: [],
      instructions: [],
      image: ''
  });

  useEffect(()=>{
    setRecipe(myRecipelist[id - 1]);
    // replace setRecipe with axios call with api then set recipe to result
  },[]);

  console.log('recipe:', recipe)

  const handleChange = e =>{
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e =>{
    e.preventDefault();
    // axios.put request goes here, use res to setRecipes
  }

  const handleCancel =()=>{
      navigate(-1);
  }

  const { name, source, serves, prepTime, cookTime, ingredients, instructions, image } = recipe;

  

  return (
  <div className='edit-recipe'>
    <form className='form-container' onSubmit={handleSubmit}>

      <div className='form-title'>
        <h1>Edit {name} Recipe</h1>
      </div>

      <div>
        <label>Image URL
        <input value={image} onChange={handleChange} type='text' name='image'/>
        </label>
      </div>
      
      <div>
        <label>Name
        <input value={name} onChange={handleChange} type='text' name='name'/>
        </label>
      </div>

      <div>
        <label>Source
        <input value={source} onChange={handleChange} type='text' name='source'/>
        </label>
      </div>

      <div>
        <label>Serves
        <input value={serves} onChange={handleChange} type='text' name='serves'/>
        </label>
      </div>

      <div>
        <label>Prep Time
        <input value={prepTime} onChange={handleChange} type='text' name='prepTime'/>
        </label>
      </div>

      <div>
        <label>Cook Time
        <input value={cookTime} onChange={handleChange} type='text' name='cookTime'/>
        </label>
      </div>

      <div>
        <label>Ingredients
        <input value={ingredients} onChange={handleChange} type='text' name='ingredients'/>
        </label>
      </div>

      <div>
        <label>Instructions
        <input value={instructions} onChange={handleChange} type='text' name='instructions'/>
        </label>
      </div>

      <div>
        <button>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

    </form>
  </div>);
}


// recipe card has the following features: 
// Id: int or string? (something unique)
// recipeName: string
// Source: string
// Serves: string (could be a range like 3-4 ppl; how many people can the recipe serve)
// Prep Time: int (minutes)
// Cook Time: int (minutes)
// Ingredients: array (of strings)
// Instructions: array (of strings)
// Image: img (this is optional but preferred)
