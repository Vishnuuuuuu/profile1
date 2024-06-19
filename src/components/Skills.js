import React from 'react';
import { Skill, SkillsContainer } from './styles';

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <Skill>
        <i className="fab fa-js"></i>
        <p>JavaScript</p>
      </Skill>
      {/* Add more Skill components for other skills */}
    </SkillsContainer>
  );
};

export default Skills;
