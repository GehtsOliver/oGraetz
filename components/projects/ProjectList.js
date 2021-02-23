import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ProjectItem from "./ProjectItem";

const ProjectList = ({ className }) => {
  const [fetchedProjects, setFetchedProjects] = useState([]),
       [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true)
    const response = await fetch("https://ograetz-strapi.herokuapp.com/projects");
    const data  = await response.json()
    setFetchedProjects(data);
    setLoading(false)
  }, []);

  return (
    <div className={className}>
      <h1>{loading ? "Loading" : ""}</h1>
      {fetchedProjects ? fetchedProjects.map((project, index) => (
        <ProjectItem key={project.title + index} project={project} />
      )) : ""}
    </div>
  );
};

const StyledProjectList = styled(ProjectList)`
  position: relative;
  top: 15rem;
  left: 5rem;
  width: 80%;
  display: grid;
  row-gap: 2rem;
  column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default StyledProjectList;
