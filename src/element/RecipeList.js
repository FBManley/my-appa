import React, { useState, useEffect} from 'react'
import NewRecipeButton from "./NewRecipeButton";
 const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/order")
    .then(resp=>resp.json())
    .then(data => setRecipes(data))
  }, [])

  const recipesList = recipes.map((r => <li>{r.recipes}</li>))

  return (
    <div>
      <h3>RecipeList / My Recipes</h3>
      <hr />
      {recipesList}
      <hr/>
      <NewRecipeButton />
      </div>
  )
}

export default RecipeList;