import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Slideshow = styled.div`
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
`;

const ImagesContainer = styled.div`
  position: relative;
  left: 1800px;
  height: 100%;
  width: 300%;
  animation: slideshow 25s linear infinite;
  display: flex;
  column-gap: 3rem;

  :hover {
    animation-play-state: paused;
  }

  @keyframes slideshow {
    0% {
      left: 1800px;
    }
    100% {
      left: -140%;
    }
  }

  > div:hover {
    cursor: pointer;
    transition: all 2s;
    transform: scale3d(1.1, 1.2, 1.1);
  }
`;

const Banner = ({ setSelectedElement }) => {
  const images = [
    {name:"HTML", category: "Frontend"},
    {name:"CSS", category: "Frontend"},
    {name: "Javascript", category: "Frontend"},
    {name: "React", category: "Frontend"},
    {name: "Nextjs", category: "Frontend"},
    {name: "Nodejs", category: "Backend"},
    {name: "Firebase", category: "Database"},
    {name: "Mongodb", category: "Database"},
    {name: "Mysql", category: "Database"},
    {name: "Figma", category: "Design"},
  ];

  const imageElements = images.map((image) => {
    return <Image onClick={() => setSelectedElement(image.category)} height={100} width={200} src={`/Stack/${image.name}.svg`} />;
  });

  return (
    <Slideshow>
      <ImagesContainer>{imageElements}</ImagesContainer>
    </Slideshow>
  );
};

export default Banner;
