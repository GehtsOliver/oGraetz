import React from "react";
import styled from "styled-components";

import ProjectItem from "./ProjectItem";
import projectData from "./ProjectData";

const ProjectList = ({ className }) => {
  const projects = projectData.map((project, index) => (
    <ProjectItem key={project.title + index} project={project} />
  ));

  return <div className={className}>{projects}</div>;
};

const StyledProjectList = styled(ProjectList)`
  position: relative;
  top: 5rem;
  left: 5rem;
  width: 80%;
  display: grid;
  row-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default StyledProjectList;
