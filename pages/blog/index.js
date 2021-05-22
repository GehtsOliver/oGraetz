import styled from "styled-components";
import { Context } from "../../context/Context";
import { useContext, useEffect, useState } from "react";

import Post from "../../components/blog/Post";
import Layout from "../../components/Layout";

const Container = styled("section")`
  width: 100vw;
  min-height: 95vh;
  display: flex;
  padding: 0 3rem;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #000;
    font-size: 2rem;
  }
`;

const index = () => {
  const { loading, setLoading } = useContext(Context);

  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await fetch(
      "https://ograetz-strapi.herokuapp.com/articles"
    );
    const data = await response.json();
    return data;
  }

  useEffect(() => setLoading(true), []);

  useEffect(async () => {
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
    setLoading(false);
  }, []);

  return (
    <Layout title="oGraetz's Web Dev Blog">
      <Container>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </Container>
    </Layout>
  );
};

export default index;
