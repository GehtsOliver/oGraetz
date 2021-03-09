import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ProjectItem from "./ProjectItem";

const ProjectList = ({ className }) => {
  const [fetchedProjects, setFetchedProjects] = useState([]),
    [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const response = await fetch(
      "https://ograetz-strapi.herokuapp.com/projects"
    );
    const data = await response.json();
    setFetchedProjects(data);
    setLoading(false);
  }, []);

  return (
    <div className={className}>
      {fetchedProjects
        ? fetchedProjects.map((project, index) => (
            <ProjectItem key={project.title + index} project={project} />
          ))
        : ""}
    </div>
  );
};

const StyledProjectList = styled(ProjectList)`
  width: 80%;
  height: 100%;
  padding: 2rem;
  display: grid;
  row-gap: 2rem;
  column-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledProjectList;
