import React from 'react';
import { AboutContainer, Description, ProfilePic } from './styles';

const About = () => {
  return (
    <AboutContainer>
      <ProfilePic src="profile.jpg" alt="Profile" />
      <Description>
        <h2>About Me</h2>
        <p>I'm a passionate MERN stack developer with a love for building amazing applications...</p>
      </Description>
    </AboutContainer>
  );
};

export default About;
