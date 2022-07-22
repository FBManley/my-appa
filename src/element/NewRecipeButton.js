import React from 'react'
import { Link } from 'react-router-dom';

 const NewRecipeButton = () => {
  return (
    <Link to={'/recipe/new'}>
    <button>Click the button to create a new recipe!</button>
  </Link>
  )
}
export default NewRecipeButton;