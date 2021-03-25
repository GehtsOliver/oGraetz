import React from "react";
import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";
import Heading from "../../utility/Heading";
import Page from "../../utility/Page";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 6rem;
  height: 100vh;

  > article {
    display: flex;
    width: 70%;
    column-gap: 10rem;
    line-height: 1.5;
  }

  > article > p {
    text-align: justify;
    letter-spacing: -1px;
    font-size: 1.25rem;
  }

  > article > p > a {
    color: #2e0347;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media (max-width: 1000px) {
    margin-top: 3rem;
    flex-direction: column;
    row-gap: 2rem;

    > article {
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
      <Container>
        <Heading>About Me</Heading>
        <Image width={250} height={250} src="/avatar.svg"></Image>
        <article>
          <p>
            Hey! <br></br>
            Welcome to my personal website. I am Oliver and I am a Web
            developer. Vienna, the capital of Austria, is my base.
          </p>
          <p>
            Web development is my passion, which is why I setup this website to
            showcase my <Link href="/projects">projects</Link>. While I am a
            business informatics student, I taught myself Web development
            entirely autodidacticly.
          </p>
          <p>
            I am always curious about new project ideas. If you have a project
            upcoming and would like to collaborate with me, feel free to{" "}
            <Link href="/contact">Get in touch</Link>.
          </p>
        </article>
      </Container>
    </Page>
  );
};

export default About;
