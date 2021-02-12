import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../utility/Heading"
import Page from "../utility/Page"

const Container = styled.div`
display: flex;
align-items: center;

@media (max-width: 800px){
  flex-direction: column;
  row-gap: 4rem;
}
`;

const About = () => {
  return (
    <Page id="About">
      <Heading>About Me</Heading>
      <Container>
        <Image width={250} height={250} src="/avatar.svg"></Image>
        <article
          style={{
            color: "black",
            marginLeft: "5rem",
          }}
        >
          <p style={{ width: "25rem" }}>
            Hey! <br/>As you might have guessed, my name is Oliver and I am a Web Developer based in Vienna, Austria.
            Coding websites and applications of any kind is my passion. I am 100% self-taught which represents quite well how much I love doing it.
          </p>
          <p style={{ width: "25rem" }}>
            I put in hundreds and hundreds of hours to reach the level of being capable of coding almost any website imagineable. There is barely a challenge I am unable to surmount.
          </p>
        </article>
      </Container>
    </Page>
  );
};

export default About;
