import React from 'react'

const RecipeCard = ({ amount, id, ingredients, instructions, name }) => { //send props from recipeLists, render a card for single db.json objectn by id

  return (
    <div>RecipeCard
      <h3>{name}</h3>
      <p>{amount}</p>
      <p>{ingredients}</p>
      <p>{instructions}</p>
      <p>{id}</p>
     </div>
  )
}
export default RecipeCard
//destructuring takes the KEYS from the PROPS OBJECT and creates VARIABLES with each same names