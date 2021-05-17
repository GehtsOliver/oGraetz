import Container from "../../components/utility/Container";
import ProjectList from "../../components/projects/ProjectList";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout>
      <Container>
        <ProjectList />
      </Container>
    </Layout>
  );
};

export default index;
