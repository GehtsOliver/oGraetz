import React from "react";
import styled from "styled-components";
import ContactBtn from "../landing-page/utility/ContactBtn";

const Page = styled.section`
  min-width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const FooterContainer = styled.div`
  width: 2580px;
  height: 2500px;
  background: #2e0347;
  position: relative;
  border-radius: 100%;
  left: -600px;
  bottom: -100px;
`;

const FooterElement = styled.footer`
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

  > h3 {
    color: #fff;
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
        <div>
          <FooterElement>
            <h3>Get in touch</h3>
            <div>
              <ContactBtn link="" icon="fab fa-linkedin-in" />
              <ContactBtn link="" icon="far fa-envelope" />
              <ContactBtn link="" icon="fab fa-twitter" />
              <ContactBtn link="" icon="fab fa-facebook" />
              <ContactBtn link="" icon="fab fa-github" />
            </div>
            <h3>Designed and coded by Oliver Grätz</h3>
          </FooterElement>
        </div>
        <FooterContainer />
      </Page>
    </>
  );
};

export default Footer;
