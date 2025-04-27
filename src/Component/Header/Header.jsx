import React from 'react';
import { NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
  return (
   <nav>
    <ul >
      <NavLink to='/'><li>Home</li></NavLink>
      <NavLink to='/login'><li>Login</li></NavLink>
    </ul>
   </nav>
  );
};

export default Header;