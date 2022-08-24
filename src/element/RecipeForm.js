import React, { useState, useEffect} from 'react';
// import CocktailCard from './CocktailCard'
// import FetchedCard from '../styles/StyledFetchedCard'
//Plan: take out API- allow for post/get of own RESTful data , THEN if needed, re-encorporate API
//Can get forms state to reset but not the inputs themselves, was ommitting handleChange for the input AND the value={state}- FIXED NOW A CONTROLLED FORM
// MIN 5 components required AND cannot rely on redirect to load --> add API and or search to satisfy component requirement
//PLAN for 8/24: show updated list when form is submitted to avoid any redirects to load data- 
const RecipeForm = () => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")

  function handleSubmit(e) {
    e.preventDefault(); 
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       name: name,
       amount: amount,
       ingredients: ingredients,
       instructions: instructions,
      })
    })
    setName("")
    setAmount("")
    setIngredients("")
    setInstructions("")
  }

  function handleNameChange(e) {
    setName(e.target.value)
  } 
  function handleAmountChange(e){
    setAmount(e.target.value)
  }
  function handleIngredientsChange(e){
    setIngredients(e.target.value)
  }
  function handleInstructionsChange(e){
    setInstructions(e.target.value)
  }

  return (
   <div>
    <br></br>
    <form onSubmit={handleSubmit} >
      <input name="name" type="text" placeholder="Drink Name" value={name} onChange={handleNameChange} /><br/>
      <input name="amount" type="number" placeholder="Amount" value={amount} onChange={handleAmountChange}  /><br/>
      <textarea rows={10} name="ingredients" type="text" value={ingredients} placeholder="Ingredients Required" onChange={handleIngredientsChange}  /><br/>
      <textarea rows={10} name="instructions" type="text" value={instructions} placeholder="Instructions" onChange={handleInstructionsChange}  /><br/> 
      <button variant="contained" onClick={handleSubmit}> <input type="submit" value = "Add Recipe"/></button> 
    </form>
   </div>
  )
}

export default RecipeForm;

  // const [newrecipe, setnewRecipe] = useState([{
  //     name: '',
  //     amount: '',
  //     ingredients: '',
  //     instructions: ''
  // }])
  // const handleChange = (e) => {
  //   setnewRecipe({
  //     ...newrecipe, [e.target.name]: e.target.value
  //   })
  // }
  // const [cocktail, setCocktail] = useState({
  // })
  // useEffect(() => {
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  //   .then(r => r.json())
  //   .then(data => {
  //     setCocktail({
  //       strDrink: data.drinks[0].strDrink,
  //       strGlass: data.drinks[0].strGlass,
  //       strInstructions: data.drinks[0].strInstructions,
  //       strIngredient1: data.drinks[0].strIngredient1,
  //       strIngredient2: data.drinks[0].strIngredient2,
  //       strIngredient3: data.drinks[0].strIngredient3,
  //       strIngredient4: data.drinks[0].strIngredient4,
  //       strIngredient5: data.drinks[0].strIngredient5,
  //       strMeasure1: data.drinks[0].strMeasure1,
  //       strMeasure2: data.drinks[0].strMeasure2,
  //       strMeasure3: data.drinks[0].strMeasure3,
  //       strMeasure4: data.drinks[0].strMeasure4,
  //       strMeasure5: data.drinks[0].strMeasure5,
  //       strDrinkThumb: data.drinks[0].strDrinkThumb
  //     })
  //   })
  // }, []) return <FetchedCard><CocktailCard drinks={cocktail}/></FetchedCard>
    // const handleChange = (e) => {
  //   setName(e.target.value)
  // }
  // const handleClick = () => {
  //   setNames([...names, name])
  //   setName("")
  // }const [names, setNames] = useState([]) value={name} onChange={(e) => handleChange(e)}