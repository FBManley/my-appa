import React from 'react'

const RecipeCard = ({ recipesList }) => { //send props from recipeLists, render a card for single db.json objectn by id
    console.log(recipesList)
    

  return (

    <div>RecipeCard
        <h2 >{[0].props}</h2>
        <h1>{recipesList[0]}</h1>
        <h1>{recipesList}</h1>
        {/* <h2>{amount}</h2>
        <h2>{ingredients}</h2>
        <h2>{instructions}</h2>
        <h2>{id}</h2> */}
      name: '',
      amount: '',
      ingredients: '',
      instructions: ''
    </div>
  )
}
export default RecipeCard
//[0].props.value.id
//destructuring takes the KEYS from the PROPS OBJECT and creates VARIABLES with each same names