import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Loader from "react-loader-spinner";
import Project from "./Project";

const Projects = ({ className }) => {
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
      {fetchedProjects ? (
        fetchedProjects.map((project, keyIndex) => (
          <Project key={keyIndex} project={project} />
        ))
      ) : (
        <Loader
          type="Puff"
          color="#000"
          height={200}
          width={200}
          timeout={10000}
        />
      )}
    </div>
  );
};

const StyledProjects = styled(Projects)`
  width: 101vw;

  border-radius: 1rem;
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

export default StyledProjects;
