import React, { useState, useEffect} from 'react'
import NewRecipeButton from "./NewRecipeButton";
import RecipeCard from "./RecipeCard";
// import RecipeCard from "./RecipeCard";
//on startup (empty square brackets), sends GET req to db.json and renders saved recipes on the page. 

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
    .then(resp => resp.json())
    .then(data => setRecipes(data))
  }, [])

 const recipesList = recipes.map((r => <li key={r.id} value={r}>{r.name}{r.amount}{r.ingredients}{r.instructions}</li>)) //need to render a single RecipeCard component for each li

  // const deleterecipe = () => {}
  return (
    <div>
      
      <h3>My recipe list:</h3>
      <hr />
      {recipes}
      <hr/>
      <NewRecipeButton />
      <RecipeCard recipes={recipesList}/>
      </div>
  )
}
// 
export default RecipeList;

// functional components can have only one prop passed to them, according to the REACT documentation: meaning i have to map in the parent before sending to child