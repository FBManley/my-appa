import React from "react";
import { NavbarLink, NavigationContainer  } from '../styles/StyledNav'

function NavBar() {
  return (
    <NavigationContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/recipes">Recipe Container</NavbarLink>
      <NavbarLink to="/newrandomrecipe">Find New Recipe</NavbarLink> 
    </NavigationContainer>
  );
}
export default NavBar;

