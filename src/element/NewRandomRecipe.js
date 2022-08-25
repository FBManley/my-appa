import React, {useState, useEffect} from 'react'
import CocktailCard from './CocktailCard'

const NewRandomRecipe = () => {
    const [cocktail, setCocktail] = useState("")

     useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(r => r.json())
    .then(data => {
      setCocktail({
        strDrink: data.drinks[0].strDrink,
        strGlass: data.drinks[0].strGlass,
        strInstructions: data.drinks[0].strInstructions,
        strIngredient1: data.drinks[0].strIngredient1,
        strIngredient2: data.drinks[0].strIngredient2,
        strIngredient3: data.drinks[0].strIngredient3,
        strIngredient4: data.drinks[0].strIngredient4,
        strIngredient5: data.drinks[0].strIngredient5,
        strMeasure1: data.drinks[0].strMeasure1,
        strMeasure2: data.drinks[0].strMeasure2,
        strMeasure3: data.drinks[0].strMeasure3,
        strMeasure4: data.drinks[0].strMeasure4,
        strMeasure5: data.drinks[0].strMeasure5,
        strDrinkThumb: data.drinks[0].strDrinkThumb
      })
    })
  }, [])
  return (
    <div>NewRandomRecipe

        <CocktailCard drinks={cocktail}/>
        {/* <button onClick={handleSubmit}>Find New Recipe!</button> */}
    </div>
  )
}
export default NewRandomRecipe