import React from "react";
import styled from "styled-components";
import StyledImageComponent from "../../utility/ImageComponent";
import {
  frontendContent,
  backendContent,
  databaseContent,
  designContent,
} from "./BodyContent";

const Body = ({ selectedElement, className }) => {
  let content = null;

  switch (selectedElement) {
    case "Frontend": {
      content = frontendContent;
      break;
    }
    case "Backend": {
      content = backendContent;
      break;
    }
    case "Database": {
      content = databaseContent;
      break;
    }
    case "Design": {
      content = designContent;
      break;
    }
    default:
      "";
      break;
  }

  let images = content.images.map((image) => {
    return (
      <StyledImageComponent
        key={image.split(".")[0]}
        src={`/Stack/${image}`}
        height={50}
        width={100}
        margin={"0 0.3rem"}
      />
    );
  });

  return (
    <article className={className}>
      <div>{images}</div>
      <p>{content.description}</p>
      <p>{content.stack}</p>
    </article>
  );
};

const StackElementBody = styled(Body)`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 4rem 4rem 4rem;
  line-height: 1.6;

  > div {
    margin: 1rem auto 2rem auto;
    padding: 1rem;
    border-radius: 3rem;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
    }
  }
`;

export default StackElementBody;
