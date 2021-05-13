import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Post from "./Post";

const StyledPosts = styled("div")`
  padding: 0 10rem;
  width: 100vw;
  font-size: 3rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 1rem;
  overflow: hidden;
  

  @media (max-width: 1000px) {
    padding: 0;
    align-items: center;
    width: 100%;
  }
`;

const Posts = () => {
  const [postsArray, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await fetch(
      "https://ograetz-strapi.herokuapp.com/articles"
    );
    const data = await response.json();
    return data;
  }

  useEffect(async () => {
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
  }, []);

  return (
    <StyledPosts>
      {postsArray
        ? postsArray.map((post) => <Post key={post.title} passPost={post} />)
        : "EMPTY"}
    </StyledPosts>
  );
};

export default Posts;
