import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";

import Layout from "../../components/Layout";
import Project from "../../components/projects/Project";

const Container = styled.div`
  padding: 5rem 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 10rem;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 10rem 0;
    row-gap: 15rem;
  }
`;

const index = () => {
  const [projects, setProjects] = useState([]),
    { setLoading } = useContext(Context);

  useEffect(async () => {
    setLoading(true);
    const response = await fetch(
      "https://ograetz-strapi.herokuapp.com/projects"
    );
    const data = await response.json();
    setProjects(data);
    setLoading(false);
  }, []);

  return (
    <Layout>
      <Container>
        {projects.map((project, keyIndex) => (
          <Project key={keyIndex} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export default index;
