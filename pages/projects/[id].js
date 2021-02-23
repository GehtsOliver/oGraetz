import React from "react";
import Page from "../../components/utility/Page"
import Navbar from "../../components/utility/Navbar"

const Project = ({ project }) => {


  return(
    <Page>
      <Navbar dark/>
    </Page>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://ograetz-strapi.herokuapp.com/projects/${context.params.id}`
  );
  const project = await response.json()
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async() => {
    const response = await fetch(
        `https://ograetz-strapi.herokuapp.com/projects`
      );
      const projects = await response.json();
      const ids = projects.map(proj => proj.id)
      const paths = ids.map(id => ({params: {id: id.toString()}}))

      return {
          paths,
          fallback: false
      }
}
export default Project;
