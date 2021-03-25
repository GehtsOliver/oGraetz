import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledPost = styled("div")`
  width: 80vw;
  display: flex;
  column-gap: 1rem;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;

  border: 1px solid gray;

  :hover {
    box-shadow: 0.3rem 0.5rem 10px 0px #2e0347;
    cursor: pointer;
    transform: scale3d(1.05, 1.05, 1.05);
    transition: all 1s;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

const Post = ({ passPost }) => {
  return (
    <Link href={`/blog/${passPost.id}`}>
      <StyledPost>
        <Image height={100} width={200} src={passPost.img[0].url} />
        <div>
          <h1>{passPost.title}</h1>
          <p>{passPost.excerpt}</p>
        </div>
      </StyledPost>
    </Link>
  );
};

export default Post;
