import styled from "styled-components";
import ImageComponent from "../utility/ImageComponent";

import ContactBtn from "./utils/FooterBtn";
import { Link } from "@material-ui/core";

const ImageContainer = styled.div`
  img {
    border-radius: 100%;
  }
`;

const Footer = styled.footer`
  width: 80vw;
  border-top: #2e0347 3px solid;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 3rem;
  color: #2e0347; !important;
  text-transform: capitalize;
  column-gap: 15rem;

  > h2,
  h3 {
    color: #2e0347; !important;
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    column-gap: 0;
    flex-direction: column !important;
  }
`;

const FooterComponent = () => {
  return (
    <Footer className="flex-row space-between justify-center">
      <div className="flex-column align-center">
        <h3>Get in touch</h3>
        <div className="flex-row" style={{ columnGap: "1rem" }}>
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
      </div>
      <div className="flex-column align-center">
        <h3>Design and code by Oliver Grätz</h3>
        <Link href="https://github.com/GehtsOliver">
          <a>
            <ImageContainer>
              <ImageComponent
                src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1621237357/64855110_xd5jyk.jpg"
                width={100}
                height={100}
              />
            </ImageContainer>
          </a>
        </Link>
      </div>
    </Footer>
  );
};

export default FooterComponent;
