import styled from "styled-components";

import AboutPage from "../components/landing-page/About";
import StackPage from "../components/landing-page/Stack/Stack";
import Layout from "../components/Layout";

const EntryComponent = styled.section`
  height: 100vh;
`;

export default function HomePage() {
  return (
    <Layout>
      <EntryComponent />
      <AboutPage />
      <StackPage />
    </Layout>
  );
}
