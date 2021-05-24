import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import Link from "next/link";
import Slide from "react-reveal/Slide";

import ImageComponent from "../../utility/ImageComponent";

const Container = styled.div`
  font-family: "Helvetica";
  background: #fff;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 20%;
  left: 20%;
  width: 60vw;
  height: 60vh;
  line-height: 1.4;

  h1 {
    margin-bottom: 0rem;
  }

  @media (max-width: 1000px) {
    top: 5%;
    left: 10%;
    width: 80vw;
    height: 90vh;
    padding: 1rem;

    span {
      display: none;
    }
  }
`;

const CloseButton = styled.i`
  cursor: pointer;
  color: red !important;
  font-size: 1.6rem;
  position: fixed;
  top: 18%;
  left: 80.5%;

  @media (max-width: 1000px) {
    top: 2%;
    left: 91%;
  }
`;

const text = {
  what: (
    <p>
      Web development is my passion. This is why I set up this website to
      showcase my <Link href="/projects">projects</Link>. While I am a business
      informatics student, I taught myself Web development autodidacticly. This
      way, I can not only utilise the theoretical knowledge I gained in
      university but also put my self-developed skills into practise.
    </p>
  ),

  how: (
    <p>
      I am always keen about kicking off new projects. If you have a project in
      mind and would like to collaborate with me, feel free to
      <Link href="/contact">Get in touch</Link>
    </p>
  ),

  who: (
    <>
      <h1>Who am I?</h1>
      <p>
        My name is Oliver and I am a student of computer science and economics.
        I live in the capital of Austria, Vienna. During my studies I have
        gained insight into the world of business through work placements at
        large multinational enterprises. In 2019, I graduated with a Bachelor's
        degree in Business Law.{" "}
        <span>
          Since I didn't know exactly what to do after that, I kept testing out
          new things. Programming has always intrigued me a lot, although a
          misconception about it and the fear of not being good enough at maths
          had discouraged me from trying it. Though this time was different, I
          wanted to have a go, which is why I started googling about what would
          be the best programming language to learn in 2019. I quickly
          discovered that most of the spotlight in the German-speaking world was
          still on Java and JavaScript. I then came across the top-rated Java
          beginners' course on Udemy. This course was my very first contact with
          programming and proved not to remain my last. Since then I have
          completed a myriad of courses, read hundreds of hours of books and
          articles on programming and did countless coding challenges.
        </span>
      </p>
      <div>
        <ImageComponent
          src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1621087660/study_90d8751aec.svg?86456.71500000026"
          width={150}
          height={150}
        />
      </div>
    </>
  ),
};

const ModalComponent = ({ content, handleClose, open }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Container className="flex-row justify-center align-center">
        <CloseButton
          onClick={() => handleClose()}
          className="far fa-times-circle"
        />
        <Slide top>
          <div className="flex-column justify-center align-center">
            {text[content]}
          </div>
        </Slide>
      </Container>
    </Modal>
  );
};

export default ModalComponent;
