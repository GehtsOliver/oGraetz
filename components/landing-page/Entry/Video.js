import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: absolute;
  top: 0rem;
  left: 0;
  width: 1000vw;
  height: 100vh;
  z-index: -1000;
  overflow: hidden;
`;

const Vid = styled.video`
  width: 100vw;
  height: 115vh !important;
  position: relative;
  margin: 0;
  top: 0rem;
  bottom: 0;
  right: 0;
  left: 0;

  @media (max-width: 1800px) {
    width: auto;
    height: 100%;
    top: 0;
  }
`;

const Darklayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: -100;
`;

const Video = () => {
  return (
    <>
      <Darklayer />
      <VideoContainer>
        <Vid autoPlay muted loop>
          <source src="/Entry-Bg-Video.mp4" type="video/mp4" />
        </Vid>
      </VideoContainer>
    </>
  );
};

export default Video;
