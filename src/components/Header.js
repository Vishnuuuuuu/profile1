import React from 'react';
import { Menu, MenuLink, Nav } from './styles';

const Header = () => {
  return (
    <Nav>
      <h1>Vishnu Prasad S</h1>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/projects">Projects</MenuLink>
        <MenuLink to="/skills">Skills</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
        <MenuLink to="/resume">Resume</MenuLink> 
      </Menu>
    </Nav>
  );
};

export default Header;
