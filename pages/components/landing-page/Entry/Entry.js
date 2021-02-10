import React, { useEffect } from "react";
import Header from "../../partials/Header";
import styled from "styled-components";

const Page = styled.section`
  min-width: 100vw;
  height: 100vh;
  padding: 0 3rem;
`;

const Darklayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: -100;
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
  titleElementOne.className = "animate__animated animate__fadeIn"
  titleElementTwo.className = "animate__animated animate__fadeIn"
  titleElementThree.className = "animate__animated animate__fadeIn"
  titleElementOne.innerText = "Hi.";
  
  titleElementTwo.innerText = "I am Oliver.";
  titleElementThree.innerText = "I am a Web Developer.";
  titleContainer.append(titleElementOne);
  setTimeout(() => {
    titleContainer.removeChild(titleElementOne);
    titleContainer.append(titleElementTwo);
  }, 4000);
  setTimeout(() => {
    titleContainer.removeChild(titleElementTwo)
    titleContainer.append(titleElementThree);
  }, 8000);
};

const Entry = () => {
  useEffect(() => {
    injectTitle();
  }, []);

  return (
    <>
      <Page>
        <Header />
        <TitleContainer className="Title-Container">
        
        </TitleContainer>
      </Page>
      <Darklayer />
    </>
  );
};

export default Entry;
