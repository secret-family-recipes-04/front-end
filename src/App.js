// import components
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import RecipeCard from './components/RecipeCard';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <SignUp/>
      <Login/>
      <RecipeCard/>
    </div>
  );
}

export default App;
