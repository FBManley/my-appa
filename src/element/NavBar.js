import React from "react";

/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "140px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {



  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activestyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipelist"
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Recipe List
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/recipe/new"
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Create New Recipe
      </NavLink>
    </div>
  );
}
export default NavBar;