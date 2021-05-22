import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoadingComponent = styled.div`
  position: static;
  height: 90vh;

  background: white;
  border-radius: 5rem;
  padding: 0 3rem;
  row-gap: 1rem;
`;

const Loading = () => {
  return (
    <LoadingComponent className="flex-column justify-center align-center">
      <h1>Loading ressources..</h1>
      <Loader
        type="RevolvingDot"
        color="#2E0347"
        height={150}
        width={150}
        timeout={100000000}
      />
      <h3>
        Sorry, for taking so long. I'm a poor student who can only afford a
        free-tier on heroku which is why it is taking so long..
      </h3>
    </LoadingComponent>
  );
};

export default Loading;
