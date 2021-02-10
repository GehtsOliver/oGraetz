import React from "react";
import styled from "styled-components";
import Banner from "./Banner"

const Page = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 60%;
  height: 50vh;
  border-radius: 1rem;
  background-color: #2e0347;
`;

const Title = styled.h1`
  color: #2e0347;
  font-size: 2rem;
`;

const Stack = () => {
  return (
    <Page>
      <Title>What I use</Title>
      <Card>
    

      </Card>
      <Banner/>
    </Page>
  );
};

export default Stack;
