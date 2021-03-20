import React from "react";
import styled from "styled-components";

const StyledCard = styled("section")`
  background: gray;
  width: 100%;
  height: 85vh;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  color: #000;
  text-transform: capitalize;
  padding: 1rem;
`;

const Card = () => {
  return (
    <StyledCard>
      <h1>Technical blog</h1>
        <p>Welcome to my technical blog site.</p>
        <p>You will find personally written blog posts on this page which are meant to inform the reader about technical terms and notions.</p>
    </StyledCard>
  );
};

export default Card;
