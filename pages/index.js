import styled from "styled-components";
import Typed from "react-typed";

import AboutPage from "../components/landing-page/About";
import StackPage from "../components/landing-page/Stack";
import Layout from "../components/Layout";
import TypedComponent from "../components/landing-page/utils/TypedComponent";

const EntryComponent = styled.div`
  height: 100vh;
`;

const index = () => {
  return (
    <Layout>
      <EntryComponent>
        <TypedComponent
          content={[
            "Hallo ich bin der Birol",
            "ich komme aus birolhuasen",
            "Wer bist du aller",
          ]}
        />
      </EntryComponent>
      <AboutPage />
      <StackPage />
    </Layout>
  );
};

export default index;
