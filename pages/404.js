import styled from "styled-components";

import Layout from "../components/Layout";
import BackButton from "../components/utility/BackButton";
import Container from "../components/utility/Container";

const NotFoundComponent = styled.div`
  width: 50vw;
  height: 60vh;
  background-image: url("https://media.makeameme.org/created/where-am-i-8c7623891a.jpg");
  background-repeat: none;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.5rem;
`;

export default function NotFoundPage() {
  return (
    <Layout title="404 - Page not found">
      <BackButton />
      <Container>
        <NotFoundComponent>
          <h1>The resource you requested does not exist </h1>
        </NotFoundComponent>
      </Container>
    </Layout>
  );
}
