import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Navbar from "../../components/utility/Navbar";
import Page from "../../components/utility/Page";
import BackArrow from "../../components/utility/BackArrow";

const StyledPage = styled(Page)`
  margin-top: 3rem;
  justify-content: normal;
  color: black;
  padding: 0 3rem;
  row-gap: 2rem;

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  > div {
    box-shadow: 0 0 20px 0px #2e0347;
  }

  p {
    width: 900px;
    font-size: 1.2rem;
    text-align: justify;
    line-height: 1.7rem;
  }

  @media (max-width: 1000px) {
    p {
      width: 95%;
    }
  }
`;

const Post = ({ post }) => {
  return (
    <>
      <Navbar />
      <BackArrow color="black"/>
      <StyledPage>
        <h1>{post.title}</h1>
        <h3>
          {post.date} BY {post.author.toUpperCase()}
        </h3>
        <Image src={post.img[0].url} width={900} height={450} />
        <p>{post.content}</p>
      </StyledPage>
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://ograetz-strapi.herokuapp.com/articles/${context.params.id}`
  );
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://ograetz-strapi.herokuapp.com/articles`);
  const posts = await response.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
