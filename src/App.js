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

import { Route, Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>

      
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          
          <Route path='/recipes/:id' element={<RecipeDetails/>}/>
          <Route exact path='/recipes' element={<RecipeList/>}/>
          <Route path='recipes/edit/:id' element={<EditRecipeForm/>}/>
          <Route path='/recipes/add' element={<AddRecipeForm/>}/>
          <Route path='/account' element={<MyAccount/>}/>
          <Route path='/signout' element={<SignOut/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
