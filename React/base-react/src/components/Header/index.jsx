import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Nav } from './styled';

function Header() {
  return (
    <Nav>
      <a href="#home">
        <FaHome />
      </a>
    </Nav>
  );
}

export default Header;
