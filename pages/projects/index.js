import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import Container from "../../components/utility/Container";
import Page from "../../components/utility/Page";
import Video from "../../components/landing-page/Entry/Video";
import Navbar from "../../components/utility/Navbar";
import ProjectList from "../../components/projects/ProjectList";
import BurgerMenu from "../../components/utility/BurgerMenu";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

const StyledPage = styled(Page)`
  background-color: transparent;
  justify-content: normal;
  align-items: center;
  height: 100vh;

  @media (max-width: 1000px) {
    section {
      position: relative;
      top: 10rem;
    }
  }
`;

const index = () => {
  const { burgerMenu, setBurgerMenu } = useContext(BurgerMenuContext);

  useEffect(() => {
    setBurgerMenu(false);
  }, []);

  return (
    <>
      <Video />
      <StyledPage>
        <Navbar />
        <Container>{!burgerMenu ? <ProjectList /> : <BurgerMenu />}</Container>
      </StyledPage>
    </>
  );
};

export default index;
