import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
   <nav>
    <ul>
      <NavLink to='/'><li>Home</li></NavLink>
    </ul>
   </nav>
  );
};

export default Header;