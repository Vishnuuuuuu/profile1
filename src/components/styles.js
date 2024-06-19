import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f2f5;
    color: #333;
  }

  * {
    transition: all 0.3s ease;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1d;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: 'Pacifico', cursive;
  }
`;


export const Menu = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ff8c00;
    transition: width 0.3s;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('background.jpg') no-repeat center center/cover;
  text-align: center;
  color: #fff;
`;

export const Intro = styled.div`
  text-align: center;
  color: #fff;

  h2 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #ff8c00;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 1rem;
  p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: #fff;
  color: #333;
`;

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  max-width: 600px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #ff8c00;
    display: inline-block;
  }

  p {
    line-height: 1.6;
    font-size: 1.2rem;
  }
`;

export const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  background: #f0f2f5;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const ProjectCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;

  img {
    width: 100%;
    border-radius: 12px;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1rem;
    color: #666;
  }

  a {
    text-decoration: none;
    color: #ff8c00;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SkillsContainer = styled.div`
  padding: 4rem 2rem;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f2f5;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  i {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #ff8c00;
    display: inline-block;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
`;

export const Button = styled.button`
  padding: 0.75rem;
  background: #ff8c00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: #e07b00;
  }
`;

export const FooterContainer = styled.footer`
  padding: 1rem;
  background: #1a1a1d;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .footer-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;

    a {
      color: #fff;
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: #ff8c00;
      }
    }
  }

  p {
    margin: 0;
  }
`;