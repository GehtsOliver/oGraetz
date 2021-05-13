import styled from "styled-components";

import Container from "../../components/utility/Container";
import Projects from "../../components/projects/Projects";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <Container>
        <Projects />
      </Container>
    </Layout>
  );
};

export default index;
