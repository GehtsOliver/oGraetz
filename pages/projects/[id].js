import React, { useContext } from "react";
import styled from "styled-components";

import BurgerMenu from "../../components/utility/BurgerMenu";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

import Page from "../../components/utility/Page";
import Video from "../../components/landing-page/Entry/Video";
import Navbar from "../../components/utility/Navbar";
import SingleProject from "../../components/projects/SingleProject";
import BackArrow from "../../components/utility/BackArrow";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBackArrow = styled(BackArrow)`
  display: absolute;
  bottom: 1rem;
`;

const Project = ({ project }) => {
  const { burgerMenu, setBurgerMenu } = useContext(BurgerMenuContext);

  return (
    <>
      <Video />
      <StyledBackArrow />
      <Navbar />
      <Page>
        <Container>
          {burgerMenu ? <BurgerMenu /> : <SingleProject project={project} />}
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
