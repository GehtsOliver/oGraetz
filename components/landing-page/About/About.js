import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../utility/Heading";
import Page from "../utility/Page";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  
  > article {
    display: flex;
    width: 40%;
    column-gap: 5rem;
    line-height: 1.5;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    row-gap: 4rem;
    
    > article {
      width: 75%;
      margin: 0 auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

`;

const About = () => {
  return (
    <Page id="About">
      <Heading>About Me</Heading>
      <Container>
        <Image width={250} height={250} src="/avatar.svg"></Image>
        <article>
          <p>
            Hey! <br />
            As you might have guessed, my name is Oliver and I am a Web
            Developer based in Vienna, Austria. Coding websites and applications
            of any kind is my passion. I am 100% self-taught which represents
            quite well how much I love doing it.
          </p>
          <p>
            I put in hundreds and hundreds of hours to reach the level of being
            capable of coding almost any website imagineable. There is barely a
            challenge I am unable to surmount.
          </p>
        </article>
      </Container>
    </Page>
  );
};

export default About;
