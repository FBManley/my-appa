import React from 'react'
import styled from 'styled-components'

const RecipeCard = ({ amount, id, ingredients, instructions, name }) => { //send props from recipeLists, render a card for single db.json objectn by id
  
  // const handleDeleteClick = () => {
  //   fetch(`http://localhost:3001/recipes/${id}`, {
  //     method: "DELETE",
  //   })
  //   .then((r) => r.json())
  //   .then(() => console.log("deleted!"))
  // }

  return (
    <div>
      <Card sx={{ maxWidth: 350 }} variant="outlined">
      <h3>Recipe Name: {name}</h3>
      <p>Amount: {amount}</p>
      <p>Ingredients: {ingredients}</p>
      <p> Instructions: {instructions}</p>
      <p>{id}</p>
      </Card>
     </div>
  )
}
export default RecipeCard
//destructuring takes the KEYS from the PROPS OBJECT and creates VARIABLES with each same names

const Card = styled.div`
  background-color: #ccd0de;
  width: 300px;
`