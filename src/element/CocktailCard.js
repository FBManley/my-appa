import React from 'react'

 const RecipeCard = ({drinks}) => {
    const { strIngredient, strDescription, strType, strInstructions} = drinks
  return (
    <div>
      <h1>Cocktail</h1>
      <h2>Ingredients:{strIngredient}</h2>
      <h2>Description:{strDescription}</h2>
      <h2>Type:{strType}</h2>
      <h3>Instructions:{strInstructions}</h3>
      <button >Find New Recipe</button> //find random new recipe
    </div>
  )
}
export default RecipeCard;
//use ingredient to build cocktail in recipeForm
//word/storyword from vid