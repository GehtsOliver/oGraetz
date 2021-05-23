import styled from "styled-components";
import PostPage from "../../components/blog/PostPage";

import Layout from "../../components/Layout";
import BackButton from "../../components/utility/BackButton";

const Container = styled.div`
  padding: 5rem 0;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 3rem 0;
  }
`;

const Post = ({ post }) => {
  return (
    <Layout title={`${post.title} | oGraetz's Blog`}>
      <BackButton />
      <Container>
        <PostPage post={post} />
      </Container>
    </Layout>
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
