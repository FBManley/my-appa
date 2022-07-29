import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

 const NewRecipeButton = () => {
  return (
    <Link to={'/recipe/new'}>
    <Button variant="contained">Click here to create a new recipe!</Button>
  </Link>
  )
}
export default NewRecipeButton;