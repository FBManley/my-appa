import React from "react";
import {  NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "140px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
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
        to="/login"
        style={linkStyles}
      >
        Login
      </NavLink>
      <NavLink
        to="/recipelist"
        style={linkStyles}
        
      >
        Recipe List
      </NavLink>

      {/* <NavLink
        to="/signup" 
        style={linkStyles}
      >
        Sign Up
      </NavLink> */}
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