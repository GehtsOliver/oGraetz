import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { useState } from "react";
import Slide from "react-reveal/Slide";

import ModalComponent from "./utils/ModalComponent";

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  
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
    <Container className="flex-column align-center justify-center gap">
      <h1>About Me</h1>
      <div className="flex-row gap align-center">
        <Slide left>
          <div className="flex-column gap">
            <Image
              width={250}
              height={250}
              src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774073/Public/Landing_Page/avatar_vglndg.svg"
            ></Image>
            <p>
              <span className="capital">H</span>ey.
              <br></br> <span className="capital">I</span> am Oliver and I am a
              Web developer based in Vienna, the capital of Austria. <br></br>
              <span className="capital">F</span>eel free to ask me some
              questions!
            </p>
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
