import React, { useState } from "react";
import styled from "styled-components";

import Banner from "./utils/Banner";
import StackElementHeader from "./utils/StackElementHeader";
import StackElementBody from "./utils/StackElementBody.js";
import Page from "../utility/Page";

const Card = styled.div`
  width: 50%;
  min-height: 30rem;
  border-radius: 1rem;
  border: 3px solid #2e0347;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2e0347 !important;

  @media (max-width: 1000px) {
    width: 90%;
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
      <h1>Technology I use</h1>
      <Card>
        <HeaderDiv>{headerElements}</HeaderDiv>
        <StackElementBody selectedElement={selectedElement} />
      </Card>
      <Banner />
    </Page>
  );
};

export default Stack;
