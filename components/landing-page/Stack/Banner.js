import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Slideshow = styled.div`
  padding: 5rem 0;
  position: static;
  overflow: normal;
`;

const ImagesContainer = styled.div`
  position: relative;
  left: 110vw;
  height: 150%;
  // width: 120vw;
  animation: slideshow 25s linear infinite;
  display: flex;
  column-gap: 3rem;
  :hover {
    animation-play-state: paused;
  }

  @keyframes slideshow {
    100% {
      left: -150vw;
    }
  }
  
  @media (max-width: 1000px) {
    display: none;
  }

  > div {
    padding: 3rem;
  }

  > div:hover {
    cursor: pointer;
    transition: all 1s;
    transform: scale3d(1.1, 1.1, 1.1);
    box-shadow: 0.5rem 0.5rem 0.5rem 0rem gray;
    border-radius: 100%;
  }

 
`;

const ImagesGrid = styled("div")`
display: none;

@media(max-width: 1000px){
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 3rem;
}


> div:hover {
  cursor: pointer;
  transition: all 1s;
  transform: scale3d(1.1, 1.1, 1.1);
  box-shadow: 0.5rem 0.5rem 0.1rem 0rem gray;
  border-radius: 30%;
}

`;

const Banner = ({ setSelectedElement }) => {
  const images = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Javascript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Nextjs", category: "Frontend" },
    { name: "Nodejs", category: "Backend" },
    { name: "Firebase", category: "Database" },
    { name: "Mongodb", category: "Database" },
    { name: "Mysql", category: "Database" },
    { name: "Figma", category: "Design" },
  ];

  const imageElements = images.map((image) => {
    return (
      <Image
        key={image.name}
        onClick={() => setSelectedElement(image.category)}
        height={100}
        width={200}
        src={`/Stack/${image.name}.svg`}
      />
    );
  });

  return (
    <Slideshow>
      <ImagesContainer>{imageElements}</ImagesContainer>
      <ImagesGrid>{imageElements}</ImagesGrid>
    </Slideshow>
  );
};

export default Banner;
