import React, { useEffect, useContext } from "react";
import styled from "styled-components";


import Page from "../../components/utility/Page";
import Navbar from "../../components/utility/Navbar";
import BurgerMenu from "../../components/utility/BurgerMenu";
import Meta from "../../components/utility/Meta";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";
import Posts from "../../components/blog/Posts";

const Container = styled("section")`
  width: 100vw;
  min-height: 95vh;
  display: flex;
  padding: 0 3rem;
  flex-direction: column;
  justify-content: center;

  h1{
    color: #000;
    font-size: 2rem;
  }
`;
// Set burger menu off on pages load
const index = () => {
  useEffect(() => {
    setBurgerMenu(false);
  }, []);
  
  const { burgerMenu, setBurgerMenu } = useContext(BurgerMenuContext);
  
  return (
    <React.Fragment>
      <Page>
        <Meta title="Technical Glossary" />
        <Navbar />
        <Container>
          {!burgerMenu ? (
            <React.Fragment>
              <h1>Glossary of Web Development Terms</h1>
              <Posts />
            </React.Fragment>
          ) : (
            <BurgerMenu color="black" />
            )}
        </Container>
      </Page>
    </React.Fragment>
  );
};

export default index;
