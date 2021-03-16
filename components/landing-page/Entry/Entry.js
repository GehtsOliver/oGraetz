import React, { useContext, useEffect, useState } from "react";
import Nav from "../../utility/Navbar";
import styled from "styled-components";
import BurgerMenu from "../../utility/BurgerMenu";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";

const Page = styled.section`
  min-width: 100vw;
  height: 100vh;
`;

const TitleContainer = styled.h1`
  font-weight: bold;
  font-size: 50px;
  position: absolute;
  top: 40rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const injectTitle = () => {
  const titleContainer = document.querySelector(".Title-Container");
  const titleElementOne = document.createElement("h1");
  const titleElementTwo = document.createElement("h1");
  const titleElementThree = document.createElement("h1");
  titleElementOne.className = "animate__animated animate__fadeIn";
  titleElementTwo.className = "animate__animated animate__fadeIn";
  titleElementThree.className = "animate__animated animate__fadeIn";
  titleElementOne.innerText = "Hi.";

  titleElementTwo.innerText = "I am Oliver.";
  titleElementThree.innerText = "I am a Web Developer.";
  titleContainer.append(titleElementOne);
  setTimeout(() => {
    titleContainer.removeChild(titleElementOne);
    titleContainer.append(titleElementTwo);
  }, 4000);
  setTimeout(() => {
    titleContainer.removeChild(titleElementTwo);
    titleContainer.append(titleElementThree);
  }, 8000);
  setTimeout(() => {
    titleContainer.removeChild(titleElementThree);
  }, 12000);
};

const Entry = () => {
  const { burgerMenu, setBurgerMenu } = useContext(BurgerMenuContext);
  const [introPlayed, setIntroPlayed] = useState(false);

  useEffect(() => {
    setBurgerMenu(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("introPlayed") || introPlayed) {
      setIntroPlayed(true);
    } else {
      injectTitle();
      localStorage.setItem("introPlayed", "true");
    }
  }, [introPlayed]);

  return (
    <>
      <Page>
        <Nav />
        <TitleContainer className="Title-Container" />
        {burgerMenu && <BurgerMenu />}
      </Page>
    </>
  );
};

export default Entry;
