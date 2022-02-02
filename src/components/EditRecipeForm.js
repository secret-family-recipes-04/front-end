import React from 'react';

export default function EditRecipeForm() {
  return (
  <div className='edit-recipe'>
    <form className='form-container'>

      <div className='form-title'>
        <h1>Edit Recipe</h1>
      </div>

      <div>
        <label>Image URL
        <input type='text' name='image'/>
        </label>
      </div>
      
      <div>
        <label>Name
        <input type='text' name='name'/>
        </label>
      </div>

      <div>
        <label>Source
        <input type='text' name='source'/>
        </label>
      </div>

      <div>
        <label>Serves
        <input type='text' name='serves'/>
        </label>
      </div>

      <div>
        <label>Prep Time
        <input type='text' name='prep-time'/>
        </label>
      </div>

      <div>
        <label>Cook Time
        <input type='text' name='cook-time'/>
        </label>
      </div>

      <div>
        <label>Ingredients
        <input type='text' name='ingredients'/>
        </label>
      </div>

      <div>
        <label>Instructions
        <input type='text' name='instructions'/>
        </label>
      </div>

      <div>
        <button>Save</button>
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
