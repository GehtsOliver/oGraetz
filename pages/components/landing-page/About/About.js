import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Page = styled.section`
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  color: #2e0347;
  font-size: 2rem;
`;

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad
            harum eius libero recusandae quasi tenetur consectetur incidunt
            inventore eveniet?
          </p>
          <p style={{ width: "25rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad
            harum eius libero recusandae quasi tenetur consectetur incidunt
            inventore eveniet?
          </p>
        </article>
      </Container>
    </Page>
  );
};

export default About;
