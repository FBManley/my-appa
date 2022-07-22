import React, { useState, useEffect} from 'react';
import CocktailCard from './CocktailCard'
 
const RecipeForm = () => {
  const [neworder, setnewOrder] = useState({
      drink: '',
      type: '',

    // information from my form to create an order in my db.json. cost? 
  })
  const [cocktail, setCocktail] = useState({
    //information from my API
    strDrink: '',
    strGlass: '',
    strInstructions: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strDrinkThumb:'',
  })

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(r => r.json())
    .then(data => {
      // console.log(data)
      setCocktail({
        strDrink: '',
        strGlass: '',
        strInstructions: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strMeasure1: '',
        strMeasure2: '',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strDrinkThumb:'',
      })
    })
  }, [])

  return (
   <div>
    <CocktailCard drinks={cocktail}/>
   </div>
  )
}

export default RecipeForm;