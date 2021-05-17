import styled from "styled-components";

import Layout from "../../components/Layout";
import ProjectPage from "../../components/projects/ProjectPage";
import BackButton from "../../components/utility/BackButton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Project = ({ project }) => {
  return (
    <Layout>
      <BackButton />
      <Container>
        <ProjectPage project={project} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://ograetz-strapi.herokuapp.com/projects/${context.params.id}`
  );
  const project = await response.json();
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://ograetz-strapi.herokuapp.com/projects`);
  const projects = await response.json();
  const ids = projects.map((proj) => proj.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
export default Project;
