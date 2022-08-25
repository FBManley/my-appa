import React from "react";
import { NavbarLink, NavigationContainer  } from '../styles/StyledNav'

function NavBar() {
  //replace recipelist with apicall to find new random recipe
  return (
    <NavigationContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/recipes">Recipe Container</NavbarLink>
      <NavbarLink to="/recipeform">Create New Recipe</NavbarLink> 
    </NavigationContainer>
  );
}
export default NavBar;

