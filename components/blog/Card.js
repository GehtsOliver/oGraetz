import styled from "styled-components";

const StyledCard = styled("section")`
  background: gray;
  width: 30%;
  height: 50vh;
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
      <h1>Blog</h1>
    </StyledCard>
  );
};

export default Card;
