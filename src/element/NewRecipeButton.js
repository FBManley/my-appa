import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

 const NewRecipeButton = () => {
  return (
    <Link to={'/recipe/new'}>
    <Button variant="contained">Click here to create a new recipe!</Button>
  </Link>
  )
}
export default NewRecipeButton;

const Button = styled.div`
  background-color: #93e5ed;
`
