import React from "react";
import styled from "styled-components";

const Page = ({ children, className, id="" }) => {
  return <section id={id} className={className}>{children}</section>;
};

const PageContainer = styled(Page)`
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default PageContainer;
