import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constant';

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Demo Projects (POC)</Title>
        <Desc>I have worked on Mern Stack Development || Front-end || Back-end Development </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'web app'} onClick={() => setToggle('web app')}>
            WEB APP'S
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all'
            ? projects.map((project, index) => (
                <ProjectCard key={project.id || index} project={project} />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project, index) => (
                  <ProjectCard key={project.id || index} project={project} />
                ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;


