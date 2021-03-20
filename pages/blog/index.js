import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import Card from "../../components/blog/Card";
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
  padding: 3rem;
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
        <Meta title="Blog" />
        <Navbar />
        <Container>
          {!burgerMenu ? (
            <React.Fragment>
              <Card />
              <Posts />
            </React.Fragment>
          ) : (
            <BurgerMenu />
          )}
        </Container>
      </Page>
    </React.Fragment>
  );
};

export default index;
