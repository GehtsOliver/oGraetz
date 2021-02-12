import React from "react";
import Image from "next/image"
import styled from "styled-components";
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
    return <Image key={image.split(".")[0]} src={`/Stack/${image}`} height={50} width={100}/>
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
  font-size: 1rem;
  padding: .5rem 4rem;
  line-height: 1.6;
  > p {
    color: white;
  }

  > div {
      width: 50%;
      margin: 1rem auto 2rem auto;
      padding: 1rem;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      background: #fff;
  }
`;

export default StackElementBody;
