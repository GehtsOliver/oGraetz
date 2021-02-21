import React from "react";
import styled from "styled-components";

import Page from "../../components/utility/Page";
import Navbar from "../../components/utility/Navbar";
import ProjectList from "../../components/projects/ProjectList";

const StyledPage = styled(Page)`
  background-color: #fff;

  >nav {
    border-bottom: 1px solid #000;
  }
`;

const index = () => {

  return (
    <StyledPage>
      <Navbar dark />
      <ProjectList />
    </StyledPage>
  );
};

export default index;
