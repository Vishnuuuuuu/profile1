import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Vishnu Prasad S  All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/vishnu-prasad-s-862b5b1bb/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        {/* <a href="https://www.linkedin.com/in/shashidhar-nalavadi-8b93272ba/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a> */}
        <a href="https://github.com/Vishnuuuuuu" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/__vishnu__17/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
