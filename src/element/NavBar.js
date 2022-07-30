import React from "react";
import {  NavLink } from "react-router-dom";
import styled from 'styled-components'

function NavBar() {
  return (
    <Nav>
      <NavLink
        to="/" 
        className='navb'
  
      >
        Home
      </NavLink>
      <NavLink
        to="/recipelist"
        className='navb'
      >
        Recipe List
      </NavLink>
      <NavLink
        to="/recipe/new"
        className='navb'
      >
        Create New Recipe
      </NavLink>
    </Nav>
  );
}
export default NavBar;

const Nav = styled.div `
  display: "inline-block";
  width: "140px";
  padding: "14px";
  margin: "0 15px 10px";
  background-color: "white";
  text-decoration: "none";
  color: "#05010f";
`
