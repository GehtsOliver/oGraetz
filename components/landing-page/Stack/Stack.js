import React, { useState } from "react";
import styled from "styled-components";

import Banner from "./Banner";
import StackElementHeader from "./StackElementHeader";
import StackElementBody from "./StackElementBody.js";
import Heading from "../../utility/Heading";
import Page from "../../utility/Page";

const Card = styled.div`
  width: 50%;
  min-height: 60%;
  border-radius: 1rem;
  background-color: #2e0347;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const HeaderDiv = styled.div`
  justify-content: center;
  display: flex;
  column-gap: 1rem;
`;

const headers = ["Frontend", "Backend", "Database", "Design"];

const Stack = () => {
  const [selectedElement, setSelectedElement] = useState("Frontend");

  const headerElements = headers.map((header) => {
    return (
      <StackElementHeader
        key={header}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      >
        {header}
      </StackElementHeader>
    );
  });

  return (
    <Page>
      <Heading>What I use</Heading>
      <Card>
        <HeaderDiv>{headerElements}</HeaderDiv>
        <StackElementBody selectedElement={selectedElement} />
      </Card>
      <Banner setSelectedElement={setSelectedElement} />
    </Page>
  );
};

export default Stack;
