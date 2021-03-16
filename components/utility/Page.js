import React, { useState } from "react";
import styled from "styled-components";

const StyledPage = styled("section")`
  width: 100vw;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.justify ? "center" : "normal")};
  padding: 0;
  overflow-y: ${(props) => (props.hidden ? "hidden" : "")};
`;

const Page = ({ children, className, id = "" }) => {
  return (
    <StyledPage id={id} className={className}>
      {children}
    </StyledPage>
  );
};

export default Page;
