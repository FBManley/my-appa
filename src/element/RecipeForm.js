import React, { useState, useEffect} from 'react';
import CocktailCard from './CocktailCard'
import FetchedCard from '../styles/StyledFetchedCard'

const RecipeForm = () => {
  const [newrecipe, setnewRecipe] = useState([{
      name: '',
      amount: '',
      ingredients: '',
      instructions: ''
    // information from my form to create a recipe in my db.json. 
  }])

  const handleChange = (e) => {
    setnewRecipe({
      ...newrecipe, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() //suppressing default action of form is post, then refresh
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       name: newrecipe.name,
       amount: newrecipe.amount,
       ingredients: newrecipe.ingredients,
       instructions: newrecipe.instructions,
      })
    })
    e.target.reset();
  }

  const [cocktail, setCocktail] = useState({
    //information from external API
  })

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
  }, []) //different array here to allow for another call to this fetch instead ONLY on load
  //dont need useEffect here, can just be a fetch in seperate function. not a must but is nice to have

//e=change , e.target is the input field above syntax lets me have only one handle despite having 2+ input fields
  return (
   <div>
    <FetchedCard><CocktailCard drinks={cocktail}/></FetchedCard>
    <br></br>
    <form onSubmit={handleSubmit}>
      <lable for="name">Drink Name:</lable>
      <input name="name" onChange={handleChange} type="text" /><br/>
      <label>Amount: </label>
      <input name="amount" onChange={handleChange} type="text" /><br/> 
      <label>Ingredients:</label>
      <input name="ingredients" onChange={handleChange} type="text" /><br/> 
      <label>Instructions:</label>
      <input name="instructions" onChange={handleChange} type="text" /><br/> 
      <button variant="contained" ><input type="submit" /></button>
    </form>
   </div>
  )
}

export default RecipeForm;

