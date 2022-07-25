import React, { useState, useEffect} from 'react';
import CocktailCard from './CocktailCard'
 
const RecipeForm = () => {
  const [newrecipe, setnewRecipe] = useState({
      drink: '',
      amount: '',


    // information from my form to create a recipe in my db.json. 
  })
  const [cocktail, setCocktail] = useState({
    //information from external API
    strDrink: '',
    strGlass: '',
    strInstructions: '',
    
  })

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(r => r.json())
    .then(data => {
      console.log(data)
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

  const handleChange = (e) => {
    setnewRecipe({
      ...newrecipe, [e.target.name]: e.target.value
    })
  }
//e=change , e.target is the input field above syntax lets me have only one handle despite having 2+ input fields

  const handleSubmit = (e) => {
    e.preventDefault() //suppressing default action of form is post, then refresh
    // const mynewRecipe = {
    //   drink: newrecipe.drink,
    //   amount: newrecipe.amount,
    //   ingredients: newrecipe.ingredients,
    //   instructions: newrecipe.instructions
    // }
    // fetch("http://localhost:3001/recipes", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(mynewRecipe)
    // })
    // .then(r = r.json())
    // .then(data => {
    //   console.log(data)
    // })
  }

  return (
   <div>
    <CocktailCard drinks={cocktail}/>
    <form onSubmit={handleSubmit}>
      <lable>Drink </lable>
      <input name="drink" onChange={handleChange} type="text" /><br/>
      <label>Amount</label>
      <input name="amount" onChange={handleChange} type="text" /><br/> 
      <label>Ingredients</label>
      <input name="ingredients" onChange={handleChange} type="text" /><br/> 
      <input type="submit" />
      <label>Instructions</label>
      <input name="instructions" onChange={handleChange} type="text" /><br/> 
    </form>
   </div>
  )
}
//potential dropdown for #'s instead of from field
//use a form for signup and use a fav/save to post to my db.json
export default RecipeForm;