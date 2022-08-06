import React from 'react'
import Card from '../styles/StyledCard'

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
    <Card>
    <div>
      <img src={strDrinkThumb} alt="image"></img>
      <h1>Your cocktail is: {strDrink}</h1>
      <h2>Ingredients: {strIngredient1} {strMeasure1}, {strIngredient2} {strMeasure2}, {strIngredient3} {strMeasure3}, {strIngredient4} {strMeasure4}, {strIngredient5} {strMeasure5}</h2>
      <h2>Glass: {strGlass}</h2>
      <h3>Instructions: {strInstructions}</h3>
    </div>
    </Card>
  )
}
export default CocktailCard;
