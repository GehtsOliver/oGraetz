import React from "react";
import styled from "styled-components";

const StackElementHeader = styled.button`
color: #2e0347;  
margin-top: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  background: none;
  font-weight: bold;
  padding-bottom: 0.5rem;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  :hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
`;

const StackElement = ({ children, selectedElement, setSelectedElement }) => {
  return (
    <StackElementHeader
      className={children === selectedElement ? "Selected" : ""}
      onClick={() => {
        setSelectedElement(children);
      }}
    >
      {children}
    </StackElementHeader>
  );
};

export default StackElement;
