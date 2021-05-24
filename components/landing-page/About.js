import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Slide from "react-reveal/Slide";

import ModalComponent from "./utils/ModalComponent";
import StyledImageComponent from "../utility/ImageComponent";
import Typed from "react-typed";

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  color: black;
  font-size: 1.3rem;
  font-weight: bold;

  @media (max-width:900px){
    height: 120vh;
    padding: 0 2rem;
   
    div{
      flex-direction: column;
  }
}

  }
`;

const About = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("who");

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Container
      id="about"
      className="flex-column align-center justify-center gap"
    >
      <h1>About Me</h1>
      <div className="flex-row gap align-center">
        <Slide left>
          <div
            style={{ width: "30rem" }}
            className="flex-column gap align-center"
          >
            <StyledImageComponent src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774073/Public/Landing_Page/avatar_vglndg.svg" />

            <Typed
              typeSpeed={80}
              strings={["Feel free to ask some questions."]}
            />
          </div>
        </Slide>

        <Slide cascade top>
          <div style={{ width: "20rem" }} className="flex-column gap">
            <Button
              onClick={() => {
                setContent("who");
                handleOpen();
              }}
              className="bg-purple"
              variant="contained"
            >
              Who are you?
            </Button>
            <Button
              onClick={() => {
                setContent("what");
                handleOpen();
              }}
              className="bg-purple"
              variant="contained"
            >
              What do you do?
            </Button>
            <Button
              onClick={() => {
                setContent("how");
                handleOpen();
              }}
              className="bg-purple"
              variant="contained"
            >
              How do you do it?
            </Button>
            <ModalComponent
              content={content}
              open={open}
              handleClose={handleClose}
            />
          </div>
        </Slide>
      </div>
    </Container>
  );
};

export default About;
