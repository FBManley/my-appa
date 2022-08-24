import React, { useState, useEffect} from 'react';
import NewRecipeButton from "./NewRecipeButton";
import RecipeCard from "./RecipeCard";
import H1 from '../styles/StyledDiv';
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
    .then(resp => resp.json())
    .then(recipes => setRecipes(recipes)
      )
  }, [])
  
 const recipesList = recipes.map((recipe) => (
  <RecipeCard 
    key={recipe.id}
    name={recipe.name}
    ingredients={recipe.ingredients}
    instructions={recipe.instructions}
    amount={recipe.amount}
  />
 )) 
  return (
    <div>
      <H1>My recipe list:</H1>
      <div>{recipesList}</div>
      <hr />
      <NewRecipeButton   />
      
    </div>
  )
}
export default RecipeList;

