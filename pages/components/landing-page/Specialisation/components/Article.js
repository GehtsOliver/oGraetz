import React from "react";
import styled from "styled-components";

const Container = styled.article`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
    font-size: 2rem;
`;

const ListItem = styled.li`
    font-size: 1.2rem;
    padding: 1rem 0;
`; 

const Article = ({ title, bulletPoints = [] }) => {
  const description = bulletPoints.map((bp, index) => {
    return <ListItem key={index}>{bp}</ListItem>;
  });

  return (
    <Container>
      <Heading>{title}</Heading>
      <ul>{description}</ul>
    </Container>
  );
};

export default Article;
