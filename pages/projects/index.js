import React from "react";
import styled from "styled-components";

import Page from "../../components/utility/Page";
import Video from "../../components/landing-page/Entry/Video";
import Navbar from "../../components/utility/Navbar";
import ProjectList from "../../components/projects/ProjectList";

const StyledPage = styled(Page)`
  background-color: transparent;
  justify-content: normal;
`;

const index = () => {
  return (
    <>
      <Video />
      <StyledPage>
        <Navbar />
        <main>
          <ProjectList />
        </main>
      </StyledPage>
    </>
  );
};

export default index;
