import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: absolute;
  top: 0rem;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1000;
`;

const Vid = styled.video`
  width: 100%;

  position: relative;
  margin: 0;
  top: -9rem;
  bottom: 0;
  right: 0;
  left: 0;

  @media (max-width: 1800px) {
    width: auto;
    height: 100%;
    top: 0;
  }
`;

const Video = () => {
  return (
    <VideoContainer>
      <Vid autoPlay muted loop>
        <source
          src="/Entry-Bg-Video.mp4"
          type="video/mp4"
        />
      </Vid>
    </VideoContainer>
  );
};

export default Video;
