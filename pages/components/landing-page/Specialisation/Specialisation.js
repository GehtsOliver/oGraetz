import React, { useState } from "react";
import styled from "styled-components";
import Article from "./components/Article";
import Navigation from "./components/Navigation";

const Page = styled.section`
min-width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Card = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  background-color: #2e0347;
  @media (max-width: 800px){
    height: 100vh;
  }
`;

const Heading = styled.h1`
color: #2e0347;
font-size: 2.5rem;
@media(max-width:800px){
  font-size: 2rem;
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
