import React, { useState } from 'react';
import './header.css';
import { Menu, MenuLink, Nav } from './styles';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <Nav>
      <h1>Vishnu Prasad S</h1>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <Menu className={isOpen ? "menu open" : "menu"}>
        <MenuLink to="/" onClick={closeMenu}>Home</MenuLink>
        <MenuLink to="/about" onClick={closeMenu}>About</MenuLink>
        <MenuLink to="/projects" onClick={closeMenu}>Projects</MenuLink>
        <MenuLink to="/skills" onClick={closeMenu}>Skills</MenuLink>
        <MenuLink to="/contact" onClick={closeMenu}>Contact</MenuLink>
        <MenuLink to="/resume" onClick={closeMenu}>Resume</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Header;
