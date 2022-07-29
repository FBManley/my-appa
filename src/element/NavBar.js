import React from "react";
import {  NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "140px",
  padding: "14px",
  margin: "0 15px 10px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        style={linkStyles}        
      >
        Home
      </NavLink>
      <NavLink
        to="/recipelist"
        style={linkStyles}  
      >
        Recipe List
      </NavLink>
      <NavLink
        to="/recipe/new"
        style={linkStyles}
      >
        Create New Recipe
      </NavLink>
    </nav>
  );
}
export default NavBar;