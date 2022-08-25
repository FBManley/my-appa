import React, { useState, useEffect} from 'react';
import RecipeForm from './RecipeForm';
import RecipeCard from './RecipeCard';

const RecipeContainer = () => {
  const [recipeList, setRecipeList] = useState([]); 
  
  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then(resp => resp.json())
      .then((recipe) => {setRecipeList(recipe)
        // console.log(recipe)
      })
  }, [])

  const recipeCards = recipeList.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)

  function handleAddRecipe(newrecipe) {
    setRecipeList([...recipeList, newrecipe])
  }

  return (
   <div>
    <RecipeForm  onAddRecipe={handleAddRecipe}/>
    <div> {recipeCards}</div>
   </div>
  )
}

export default RecipeContainer;
