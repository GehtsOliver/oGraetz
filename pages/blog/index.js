import React, { useEffect, useContext } from "react";

import Video from "../../components/landing-page/Entry/Video";
import Page from "../../components/utility/Page";
import Navbar from "../../components/utility/Navbar";
import BurgerMenu from "../../components/utility/BurgerMenu";
import Meta from "../../components/utility/Meta";
import Container from "../../components/utility/Container";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

const index = () => {
  useEffect(() => {
    setBurgerMenu(false);
  }, []);

  const { burgerMenu, setBurgerMenu } = useContext(BurgerMenuContext);

  return (
    <React.Fragment>
      <Page>
        <Meta title="Contact Me" />
        <Video />
        <Navbar />
        <Container>{!burgerMenu ? <h1>Hello</h1> : <BurgerMenu />}</Container>
      </Page>
    </React.Fragment>
  );
};

export default index;
