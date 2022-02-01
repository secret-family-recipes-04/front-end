// import components
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <SignUp/>
      <Login/>
      <RecipeDetails/> */}
      <RecipeList/>
    </div>
  );
}

export default App;
