import styled from "styled-components";
import GetToKnowButton from "./utils/GetToKnowMeButton";
import Typed from "react-typed";

const EntryPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

const TextContainer = styled.div`
  // position: absolute;
  // top: 70%;
  // left: 37.5vw;
  margin-bottom: 3rem;

  color: white;
  font-weight: 800;
  font-size: 2rem;
  text-align: center;
  min-height: 3rem;
  border-radius: 10px;

  @media (max-width: 700px) {
    top: 60%;
  }
`;

const Entry = () => {
  return (
    <EntryPage>
      <TextContainer className="flex-row justify-center align-center">
        <Typed
          typeSpeed={60}
          backSpeed={50}
          strings={[
            "Hey.",
            "My name is Oliver.",
            "I am a Web developer.",
            "Get to know me.",
          ]}
        />
      </TextContainer>
      <GetToKnowButton />
    </EntryPage>
  );
};

export default Entry;
