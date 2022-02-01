import React from 'react';

export default function Header() {
  return (
  <header>

      <div className='logo'>
          <a>Secret Family Recipes</a>
      </div>

      <nav>
        <a href='#'>Sign In</a>
        <a href='#'>Register</a>
        {/* private routes */}
        <a href='#'>Recipes</a>
        <a href='#'>New Recipe</a>
        <a href='#'>Account</a>
        <a href='#'>Sign Out</a>
      </nav>

  </header>);
}
