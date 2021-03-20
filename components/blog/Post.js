import React from "react";
import styled from "styled-components";
import Image from "next/image"

const StyledPost = styled("div")`
width: 50vw;

padding: 1rem;
border-radius: 2rem;
font-size: 1.2rem;

:hover {
    box-shadow: 0.3rem 0.5rem 10px 0px #2e0347;
    cursor: pointer;
    transform: scale3d(1.05, 1.05, 1.05);
    transition: all 1s;
}

@media (max-width: 1000px){
    width: 90vw;
}
`;

const Post = ({ passPost }) => {
    return (
    <StyledPost>
      <h1>{passPost.title}</h1>
      <Image height={125} width={250} src={passPost.img[0].url} />
      <p>{passPost.content}</p>
    </StyledPost>
  );
};

export default Post;
