import React from 'react';
import profileImage from '../assets/profile.jpeg'; // Import the image using a module import
import "./About.css";
import { AboutContainer, Description, ProfilePic } from './styles';

const About = () => {
  return (
    <AboutContainer>
      <ProfilePic src={profileImage} alt="Profile" /> 
      <Description>
        <h2>About Me</h2>
        <p>
          Hi Everyone, I am <strong className="highlight">Vishnu Prasad S</strong> from <strong className="highlight">Bangalore, India</strong>.
        </p>
        <p>
          I am currently employed as a Backend Developer at AADS. I have completed a Diploma in Computer Science at SJ(govt)Polytechnic.
        </p>
        <p>
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li>Playing Chess</li>
          <li>Reading Books</li>
          <li>Exploring new AI trends</li>
          <li>Outdoor games like Cricket, Football you name it I play it.</li>
        </ul>
        <p className="quote">
          "When you give your 100% focus on your work, Success is Inevitable" - @Vp
        </p>
      </Description>
    </AboutContainer>
  );
};

export default About;
