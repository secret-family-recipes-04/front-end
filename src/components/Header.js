import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
  <header>

      <div className='logo'>
          <Link to=''>Secret Family Recipes</Link>
      </div>

      <nav>
        <Link to='/login'>Sign In</Link>
        <Link to='/signup'>Register</Link>
        {/* private routes */}
        <Link to='/recipes'>Recipes</Link>
        <Link to='/recipes/add'>New Recipe</Link>
        <Link to='/account'>Account</Link>
        <Link to='/signout'>Sign Out</Link>
      </nav>

  </header>);
}
