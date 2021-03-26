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
}

`;

const Banner = ({ setSelectedElement }) => {
  const images = [
    { name: "HTML", category: "Frontend", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/HTML_gqml0l.svg" },
    { name: "CSS", category: "Frontend", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/CSS_d0peii.svg" },
    { name: "Javascript", category: "Frontend", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/Javascript_zmniqy.svg" },
    { name: "React", category: "Frontend", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/React_gqppbn.svg" },
    { name: "Nextjs", category: "Frontend", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/Nextjs_ivyuye.svg" },
    { name: "Nodejs", category: "Backend", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/Nodejs_pklusa.svg" },
    { name: "Firebase", category: "Database", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/Firebase_lcs0da.svg" },
    { name: "Mongodb", category: "Database", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774196/Public/Stack/Mongodb_hx9qnm.svg" },
    { name: "Mysql", category: "Database", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774197/Public/Stack/Mysql_k9qhuf.svg" },
    { name: "Figma", category: "Design", url: "https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774194/Public/Stack/Figma_xzsaxj.svg" },
  ];

  const imageElements = images.map((image) => {
    return (
      <Image
        key={image.name}
        onClick={() => setSelectedElement(image.category)}
        height={100}
        width={200}
        src={image.url}
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
