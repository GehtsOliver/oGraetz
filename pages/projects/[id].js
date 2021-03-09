import React from "react";
import styled from "styled-components";

import Page from "../../components/utility/Page";
import Video from "../../components/landing-page/Entry/Video";
import Navbar from "../../components/utility/Navbar";
import SingleProject from "../../components/projects/SingleProject";

const Container = styled.div`
  padding-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Project = ({ project }) => {
  return (
    <>
      <Video />
      <Page hidden>
        <Navbar />
        <Container>
          <SingleProject project={project} />
        </Container>
      </Page>
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://ograetz-strapi.herokuapp.com/projects/${context.params.id}`
  );
  const project = await response.json();
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://ograetz-strapi.herokuapp.com/projects`);
  const projects = await response.json();
  const ids = projects.map((proj) => proj.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
export default Project;
