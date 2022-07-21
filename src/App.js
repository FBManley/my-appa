
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './element/Login';
import SignUp from './element/SignUp';
import RecipeList  from './element/RecipeList';
import RecipeCard from './element/RecipeCard';
import RecipeForm from './element/RecipeForm'; 
import Home from './element/Home';


function App() {
  return (

    <Router>
    
        <Routes>
          
        <Route exact path="/" element={<Home />}/>  
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={ <SignUp />}/>
        <Route path="/recipelist" element={<RecipeList />}/>
        <Route path="/recipecard" element={<RecipeCard />}/>
        <Route path="/recipe/new" element={ <RecipeForm />}/> 
        </Routes>
     
    </Router>
  );
}

export default App;