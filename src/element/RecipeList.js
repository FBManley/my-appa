import React, { useState, useEffect} from 'react'
import NewRecipeButton from "./NewRecipeButton";

//on startup (empty square brackets), sends GET req to db.json and renders saved recipes on the page. 

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
    .then(resp => resp.json())
    .then(data => setRecipes(data))
  }, [])

  const recipesList = recipes.map((r => <li>{r.name}</li>))

  return (
    <div>
      <h3></h3>
      <hr />
      {recipesList}
      <hr/>
      <NewRecipeButton />
      </div>
  )
}

export default RecipeList;