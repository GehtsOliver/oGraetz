import Typed from "react-typed";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 20rem;
  left: 50%;
  padding: 0;
  width: 30rem;
  height: 10rem;
  border-radius: 10px;
  background-color: black;
  color: white !important;
  `;
  
  const Header = styled.div`
  border-radius: 10px;
  position: static;
  background-color: #3d3e41;
  height: 1rem;
  width: 100%;
`;

const TypedComponent = ({ content }) => {
  return (
    <Container>
      <Header />
      <Typed typeSpeed={50} strings={content} />
    </Container>
  );
};

export default TypedComponent;
