import React, { useState, useEffect} from 'react'
import NewRecipeButton from "./NewRecipeButton";
import RecipeCard from "./RecipeCard";
import styled from 'styled-components'
//on startup (empty square brackets), sends GET req to db.json and renders saved recipes on the page. 

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
      <H1>My recipe list:{recipesList}</H1>
      <hr />
      <NewRecipeButton   />
    </div>
  )
}
export default RecipeList;
// functional components can have only one prop passed to them, according to the REACT documentation: meaning i have to map in the parent before sending to child
const H1 = styled.div`
  background-color: white;
  width: 300px;
`