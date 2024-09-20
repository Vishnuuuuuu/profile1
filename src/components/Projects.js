import React from 'react';
import { ProjectCard, ProjectsContainer } from './styles';
// Adjust the path according to your file structure
import timeCapsuleImg from '../assets/time-capsule.png'; // Assuming the correct path to your image

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectCard>
        <img src={timeCapsuleImg} alt="Time Capsule Project" />
        <h3>Time Capsule</h3>
        <p>A project that stores memories and important data to be retrieved later.(Note: this is down due to backend restrictions)</p>
        <a href="https://github.com/Vishnuuuuuu/Time-Capsule-0.1">View on GitHub</a>
      </ProjectCard>
      {/* Add more ProjectCard components for other projects */}
    </ProjectsContainer>
  );
};

export default Projects;
