import React from 'react'

const RecipeCard = ({ recipes }) => { //send props from recipeLists, render a card for single db.json objectn by id
    console.log(recipes)
    

  return (

    <div>RecipeCard
        <h2 recipes>{[0].props.value.name}</h2>
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