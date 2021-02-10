import React from "react";
import styled from "styled-components";

const Page = styled.section`
  min-width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const FooterElement = styled.footer`
  width: 3098px;
  height: 1794px;
  background: #2e0347;
  position: relative;
  border-radius: 100%;
  left: -1190px;
  top: 250px;
`;

const Footer = () => {
  return (
    <>
      <Page>
        <FooterElement>
          
        </FooterElement>
      </Page>
    </>
  );
};

export default Footer;
