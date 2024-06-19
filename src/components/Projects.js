import React from 'react';
import { ProjectCard, ProjectsContainer } from './styles';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectCard>
        <img src="project1.jpg" alt="Project 1" />
        <h3>Project Title</h3>
        <p>Project Description...</p>
        <a href="https://github.com/your-project">View on GitHub</a>
      </ProjectCard>
      {/* Add more ProjectCard components for other projects */}
    </ProjectsContainer>
  );
};

export default Projects;
