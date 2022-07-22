import React from 'react'

 const CocktailCard = ({drinks}) => {
    const {  strDrink, strType, strInstructions, strDrinkThumb, strCategory} = drinks
  return (
    <div>
      <h1>Your cocktail is: {strDrink}</h1>
      <h2>Category:{strCategory}</h2>
      {/* <h2>Ingredients:{strIngredient1}</h2> */}
      <h2>Type:{strType}</h2>
      <h3>Instructions:{strInstructions}</h3>
      <h3>img: {strDrinkThumb}</h3>
      <button >Find New Recipe</button> //find random new recipe
      {/* onClick for this button- state/fetch coming from form parent  */}
    </div>
  )
}
export default CocktailCard;
//use ingredient to build cocktail in recipeForm
//word/storyword from vid
// fetching this in recipeform: https://www.thecocktaildb.com/api/json/v1/1/random.php