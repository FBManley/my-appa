import React, { useState, useEffect} from 'react';

const RecipeForm = ({ onAddRecipe }) => {
 
  const [newRecipe, setNewRecipes] = useState({
    name: "",
    amount: "",
    ingredients: "",
    instructions: ""
  })

  function handleNewRecipeChange(e){
    setNewRecipes({...newRecipe, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    const newRecipeInfo = ({
      name: newRecipe.name,
      amount: newRecipe.amount,
      ingredients: newRecipe.ingredients,
      instructions: newRecipe.instructions
    })
    fetch("http://localhost:3001/recipes", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecipeInfo)
      })
      .then((r) => r.json())
      .then((newRecipe) => onAddRecipe(newRecipe))
          setNewRecipes({
           name: "",
           amount: "",
           ingredients: "",
           instructions: ""
          }) 
  }

  return (
    <div>
      <div></div>
      <hr/>
      <br></br>
    <form onSubmit={handleSubmit} >
      <input name="name" type="text" placeholder="Drink Name" value={newRecipe.name} onChange={handleNewRecipeChange} /><br/>
      <input name="amount" type="number" placeholder="Amount" value={newRecipe.amount} onChange={handleNewRecipeChange}  /><br/>
      <textarea rows={10} name="ingredients" type="text" value={newRecipe.ingredients} placeholder="Ingredients Required" onChange={handleNewRecipeChange}  /><br/>
      <textarea rows={10} name="instructions" type="text" value={newRecipe.instructions} placeholder="Instructions" onChange={handleNewRecipeChange}  /><br/> 
      <button variant="contained" onClick={handleSubmit}> <input type="submit" value = "Add Recipe"/></button> 
    </form>
    </div>
  )
}
export default RecipeForm;
