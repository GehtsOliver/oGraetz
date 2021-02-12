import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Banner from "./Banner";
import StackElementHeader from "./StackElementHeader";
import StackElementBody from "./StackElementBody.js";
import Heading from "../utility/Heading"
import Page from "../utility/Page"

const Card = styled.div`
  width: 60%;
  height: 50vh;
  border-radius: 1rem;
  background-color: #2e0347;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  column-gap: 3rem;
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
