import styled from "styled-components";

import Page from "../../components/utility/Page";
import Posts from "../../components/blog/Posts";
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
  return (
    <Layout title="Glossary">
      <Page>
        <Container>
          <>
            <h1>Glossary Of Web Development Terms</h1>
            <Posts />
          </>
        </Container>
      </Page>
    </Layout>
  );
};

export default index;
