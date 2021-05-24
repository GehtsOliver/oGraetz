import styled from "styled-components";
import { Context } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import ImageComponent from "../../components/utility/ImageComponent";

import Post from "../../components/blog/Post";
import Layout from "../../components/Layout";

const Container = styled("section")`
  width: 100vw;
  display: flex;
  padding: 5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  img {
    border-radius: 100%;
  }

  @media (max-width: 1000px) {
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

const index = () => {
  const { setLoading } = useContext(Context);

  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await fetch(
      "https://ograetz-strapi.herokuapp.com/articles?_sort=createdAt:DESC"
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
        <h1 style={{ margin: 0 }}>oGraetz's Web Development Blog</h1>
        <div className="flex-row gap align-center">
          <ImageComponent
            src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1621237357/64855110_xd5jyk.jpg"
            width={100}
            height={100}
          />
          <p>
            The purpose of my blog is to simplify technical topics for you and
            to share a little about myself.
          </p>
        </div>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </Container>
    </Layout>
  );
};

export default index;
