import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import RecipeForm  from './element/RecipeForm';
import CocktailCard from './element/CocktailCard';
import RecipeContainer from './element/RecipeContainer'; 
import Home from './element/Home';
import NavBar from './element/NavBar';
import './styles/StyledNav.js'
//recipecontainer=recipeList
function App() {
  return (
    <Router>
    <NavBar />
        <Routes>
        <Route exact path="/" element={<Home />}/>  
        <Route exact path="/recipes" element={ <RecipeContainer />}/> 
        <Route exact path="/recipeform" element={<RecipeForm />}/>
        <Route exact path="/cocktailcard" element={<CocktailCard />}/>
        
        </Routes>
    </Router>
  );
}

export default App;