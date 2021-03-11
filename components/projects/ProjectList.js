import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ProjectItem from "./ProjectItem";

const ControlButton = styled.button`
  padding: 2rem;
  background: black;
  color: white;
`;

const ProjectList = ({ className }) => {
  const [fetchedProjects, setFetchedProjects] = useState([]),
    [loading, setLoading] = useState(false),
    [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index), [index];
  });
  useEffect(async () => {
    setLoading(true);
    const response = await fetch(
      "https://ograetz-strapi.herokuapp.com/projects"
    );
    const data = await response.json();

    setFetchedProjects(data);
  }, []);

  useEffect(() => {
    let projects = [];

    if (fetchedProjects) {
      setLoading(false);
      for (let i = 0; i < 4; i++) {
        projects.push(fetchedProjects[i]);
      }
    }
  }, [fetchedProjects, index]);

  return (
    <div className={className}>
      {/* <ControlButton onClick={() => setIndex((index) => index - 1)}>
        -
      </ControlButton> */}
      {fetchedProjects ? (
        fetchedProjects.map((project, keyIndex) => (
          <ProjectItem key={keyIndex} project={project} />
        ))
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        ""
      )}
      {/* <ControlButton onClick={() => setIndex((index) => index + 1)}>
        +
      </ControlButton> */}
    </div>
  );
};

const StyledProjectList = styled(ProjectList)`
  width: 101vw;

  border-radius: 1rem;
  background: #fff;
  padding: 2rem;
  display: flex;
  column-gap: 5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
  }
`;

export default StyledProjectList;
