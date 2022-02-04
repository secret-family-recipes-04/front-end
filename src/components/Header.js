import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { token, loggedIn, setLoggedIn } = props;

  useEffect(()=>{
    console.log('logged in?', loggedIn)
    token !== null ? setLoggedIn(true) : setLoggedIn(false);
  }, [loggedIn, token])

  return (
  <header id='header'>

      <div className='logo'>
          <Link to=''>Secret Family Recipes</Link>
      </div>

      <nav>
        { !loggedIn && <Link to='/login'>Sign In</Link>}
        { !loggedIn && <Link to='/signup'>Register</Link>}
        {/* private routes */}
        { loggedIn && <Link to='/recipes'>Recipes</Link>}
        { loggedIn && <Link to='/recipes/add'>New Recipe</Link>}
        { loggedIn && <Link to='/account'>Account</Link>}
        { loggedIn && <Link to='/logout'>Sign Out</Link>}
      </nav>

  </header>);
}
