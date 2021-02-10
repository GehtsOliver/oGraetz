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
    0%    { left: 1800px; }
    100%  { left: -140%; }
  }

  > div:hover{
    cursor: pointer;
    transition: all 2s;
    transform: scale3d(1.1, 1.2, 1.1)
  }
`;

const Banner = () => {
  return (
    <Slideshow>
      <ImagesContainer>
        <div><Image height={150} width={200} src="/Stack/HTML.svg" /></div>

        <Image height={150} width={200} src="/Stack/CSS.svg" />

        <Image height={150} width={200} src="/Stack/Javascript.svg" />

        <Image height={150} width={200} src="/Stack/React.svg" />

        <Image height={150} width={200} src="/Stack/Nextjs.svg" />

        <Image height={150} width={200} src="/Stack/Nodejs.svg" />

        <Image height={150} width={200} src="/Stack/Firebase.svg" />

        <Image height={150} width={200} src="/Stack/Mongodb.svg" />

        <Image height={150} width={200} src="/Stack/Mysql.svg" />

        <Image height={150} width={200} src="/Stack/Figma.svg" />
      </ImagesContainer>
    </Slideshow>
  );
};

export default Banner;
