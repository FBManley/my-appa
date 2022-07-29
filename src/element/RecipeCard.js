import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const RecipeCard = ({ amount, id, ingredients, instructions, name }) => { //send props from recipeLists, render a card for single db.json objectn by id

  return (
    <div>
      <Card sx={{ maxWidth: 350 }} variant="outlined">
      <h3>{name}</h3>
      <p>{amount}</p>
      <p>{ingredients}</p>
      <p>{instructions}</p>
      <p>{id}</p>
      <Button variant="contained">delete</Button>
      </Card>
     </div>
  )
}
export default RecipeCard
//destructuring takes the KEYS from the PROPS OBJECT and creates VARIABLES with each same names