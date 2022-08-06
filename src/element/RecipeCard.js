import React from 'react'
import styled from 'styled-components'

const RecipeCard = ({ amount, id, ingredients, instructions, name }) => { 
  
  return (
    <div>
      <Card className='.container'sx={{ maxWidth: 350 }} variant="outlined">
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


const Card = styled.div`
  background-color: #ccd0de;
  width: 300px;
  padding: 10px;
  margin: 20px;
  box-shadow: 10px, 10px, 20px, 0 px, rgb(0, 0, 0, 0.2);
`