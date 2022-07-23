import React from 'react'

 const CocktailCard = ({drinks}) => {
    const {  
      strDrink, 
      strInstructions, 
      strGlass, 
      strIngredient1, 
      strIngredient2, 
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strDrinkThumb } = drinks
  return (
    <div>
      <h3>{strDrinkThumb}</h3>
      <h1>Your cocktail is: {strDrink}</h1>
      {/* <h2>Category:{strCategory}</h2> */}
      <h2>Ingredients:{strIngredient1}{strMeasure1}, {strIngredient2}{strMeasure2}, {strIngredient3}{strMeasure3}, {strIngredient4}{strMeasure4}, {strIngredient5}{strMeasure5}</h2>
      <h2>Glass:{strGlass}</h2>
      <h3>Instructions:{strInstructions}</h3>
      <button >Find New Recipe</button> //find random new recipe
      {/* onClick for this button- state/fetch coming from form parent  */}
    </div>
  )
}
export default CocktailCard;
//use ingredient to build cocktail in recipeForm
//word/storyword from vid
// fetching this in recipeform: https://www.thecocktaildb.com/api/json/v1/1/random.php
