import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

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
      <h3>{name}</h3>
      <p>{amount}</p>
      <p>{ingredients}</p>
      <p>{instructions}</p>
      <p>{id}</p>
      <Button className="remove" variant="contained" >delete</Button>
      </Card>
     </div>
  )
}
export default RecipeCard
//destructuring takes the KEYS from the PROPS OBJECT and creates VARIABLES with each same names