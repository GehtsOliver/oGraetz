import React, { useState } from "react";
import styled from "styled-components";

import Article from "./components/Article";
import Navigation from "./components/Navigation";
import Heading from "../utility/Heading"
import Page from "../utility/Page"

import content from "./Content"

const Card = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  background-color: #2e0347;
  @media (max-width: 800px){
    height: 100vh;
  }
`;


const bulletPoints = ["SEO Optimized", "Stunning first impression", "Maximum Conversion", "Lorem Ipsum"]



const Specialisation = () => {
  const [selectedArticle, setSelectedArticle] = useState("Landing Pages")

  return (
    <Page>
      <Heading>What I specialice in</Heading>
      <Card>
        <Article title={"Landing Pages"} bulletPoints={bulletPoints}></Article>
        <Navigation/>
      </Card>
    </Page>
  );
};

export default Specialisation;
