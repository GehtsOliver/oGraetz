import React from "react";
import styled from "styled-components";

const StyledArrow = styled("a")`
  position: fixed;
  left: 10rem;
  top: 10rem;
  width: 4rem;
  height: 4rem;

  border-radius: 100%;
  border: 1px solid black;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

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
      <i class="fas fa-arrow-left fa-2x"></i>
    </StyledArrow>
  );
};

export default BackArrow;
