import React from "react";
/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
/* Add basic styling for NavLinks */

const linkStyles = {
  display: "inline-block",
  width: "140px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
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
        to="/login"
        style={linkStyles}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup" 
        style={linkStyles}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/recipe/new"
        style={linkStyles}
      >
        Create New Recipe
      </NavLink>
    </div>
  );
}
export default NavBar;