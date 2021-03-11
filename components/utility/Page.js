import React from "react";
import styled from "styled-components";

const Page = ({ children, className, id = "" }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

const PageContainer = styled(Page)`
  width: 100vw;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.justify ? "center" : "normal")};
  padding: 0;
  overflow-y: ${(props) => (props.hidden ? "hidden" : "")};
`;

export default PageContainer;
