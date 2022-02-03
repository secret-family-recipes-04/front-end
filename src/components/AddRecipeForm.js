import React from 'react';

export default function AddRecipeForm() {
  return (
  <div className='recipe-form-container'>
    <form>

      <div className='recipe-form-title'>
        <h1>Add Recipe</h1>
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

      <div className='submit'>
        <button>Save</button>
      </div>

    </form>
  </div>);
}
