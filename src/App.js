
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './element/Login';
// import SignUp from './element/SignUp';
import RecipeList  from './element/RecipeList';
import CocktailCard from './element/CocktailCard';
import RecipeForm from './element/RecipeForm'; 
import Home from './element/Home';
import NavBar from './element/NavBar';

function App() {

  return (

    <Router>
    <NavBar />
        <Routes>
        <Route exact path="/" element={<Home />}/>  
        <Route exact path="/login" element={<Login />}/>
        {/* <Route exact path="/signup" element={ <SignUp />}/> */}
        <Route exact path="/recipelist" element={<RecipeList />}/>
        <Route exact path="/cocktailcard" element={<CocktailCard />}/>
        <Route exact path="/recipe/new" element={ <RecipeForm />}/> 
        
        </Routes>
     
    </Router>
  );
}

export default App;