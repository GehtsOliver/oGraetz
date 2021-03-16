import React from "react";
import styled from "styled-components";
import ContactBtn from "../utility/FooterBtn";

const Page = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: 50vh;
  }
`;

const FooterContainer = styled.div`
  width: 2580px;
  height: 2500px;
  background: #2e0347;
  position: relative;
  border-radius: 100%;
  left: -600px;
  bottom: -100px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const FooterElement = styled.footer`
  background: #2e0347;
  width: 50rem;
  position: relative;
  z-index: 1000;
  top: 30rem;
  left: 15rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    padding: 2rem 0 8rem 0;
    width: 100%;
    position: relative;
    top: 0rem;
    left: 0;
  }

  > h3 {
    color: #fff;
    font-size: 1.3rem;
  }

  > div {
    display: flex;
    column-gap: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <>
      <Page>
        <FooterElement>
          <h3>Get in touch</h3>
          <div>
            <ContactBtn
              link="mailto: mail@olivergraetz.com"
              icon="far fa-envelope"
            />
            <ContactBtn
              link="https://www.linkedin.com/in/oliver-gr%C3%A4tz-a360aa155/"
              icon="fab fa-linkedin-in"
            />
            <ContactBtn
              link="https://twitter.com/gratz_oliver"
              icon="fab fa-twitter"
            />
            <ContactBtn
              link="https://github.com/GehtsOliver"
              icon="fab fa-github"
            />
          </div>
          <h3>Design and code by Oliver Grätz</h3>
        </FooterElement>

        <FooterContainer />
      </Page>
    </>
  );
};

export default Footer;
