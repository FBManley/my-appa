
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RecipeList  from './components/RecipeList';
import RecipeCard from './components/RecipeCard';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <Router>
    
      <Routes>
        
        <Route exact path="/" component={<Home />}/>
        <Route path="/login" component={<Login />}/>
        <Route path="/signup" component={ <SignUp />}/>
        <Route path="/recipelist" component={<RecipeList />}/>
        <Route path="/recipecard" component={<RecipeCard />}/>
        <Route path="/recipe/new" component={ <RecipeForm />}/> 
      </Routes>
    </Router>
  );
}

export default App;