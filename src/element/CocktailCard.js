import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

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
      {/* <Link to={'/recipe/new'}><Button variant="contained">Find New Recipe</Button> </Link> */}
      {/* onClick for this button- state/fetch coming from form parent  */}
    </div>
    </Card>
  )
}
export default CocktailCard;
//use ingredient to build cocktail in recipeForm
// fetching this in recipeform: https://www.thecocktaildb.com/api/json/v1/1/random.php
