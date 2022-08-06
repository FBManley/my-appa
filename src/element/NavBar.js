import React from "react";
import { NavbarLink, NavigationContainer  } from '../styles/StyledNav'

function NavBar() {
  return (
    <NavigationContainer>
      <NavbarLink
        to="/" 
      >
        Home
      </NavbarLink>
      <NavbarLink
        to="/recipelist"
      >
        Recipe List
      </NavbarLink>
      <NavbarLink
        to="/recipe/new"
      >
        Create New Recipe
      </NavbarLink>
    </NavigationContainer>
  );
}
export default NavBar;

