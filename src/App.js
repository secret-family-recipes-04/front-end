import React, { useState, useEffect } from 'react';
// import components
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import EditRecipeForm from './components/EditRecipeForm';
import AddRecipeForm from './components/AddRecipeForm'; 
import MyAccount from './components/MyAccount';
import SignOut from './components/SignOut';

import { Route, Routes, useParams } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import myRecipelist from './mocks/DummyData';


import './App.css';


function App() {
  const token = localStorage.getItem('token');
  const [loggedIn, setLoggedIn] = useState(false)
  const [recipes, setRecipes] = useState([]);
 
  useEffect(()=>{
    setRecipes(myRecipelist);
    // axios call here when api is working
  }, [])


  return (
    <div className="App">
      <Header token={token} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          
          <Route path='/recipes/:id' element={<RecipeDetails/>}/>
          <Route exact path='/recipes' element={<PrivateRoute><RecipeList/></PrivateRoute>}/>
          <Route path='recipes/edit/:id' element={<PrivateRoute><EditRecipeForm setRecipes={setRecipes}/></PrivateRoute>}/>
          <Route path='/recipes/add' element={<PrivateRoute><AddRecipeForm/></PrivateRoute>}/>
          <Route path='/account' element={<PrivateRoute><MyAccount/></PrivateRoute>}/>
          <Route path='/logout' element={<PrivateRoute><SignOut/></PrivateRoute>}/>
        </Routes>
      
    </div>
  );
}

export default App;
