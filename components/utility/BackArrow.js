import React from "react";
import styled from "styled-components";

const StyledArrow = styled("a")`
  position: absolute;
  left: 10rem;
  top: 10rem;
  width: 4rem;
  height: 4rem;

  border-radius: 100%;
  border: 1px solid ${(props) => props.color};

  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 1000px){
    display: none;
    
  }
  :hover {
    transform: scale3d(1.2, 1.2, 1.2);
    transition: all 500ms;
    cursor: pointer;
  }
`;

const BackArrow = () => {
  const clickHandler = () => {
    window.history.back();
  };

  return (
    <StyledArrow onClick={clickHandler}>
      <i className="fas fa-arrow-left fa-2x"></i>
    </StyledArrow>
  );
};

export default BackArrow;
