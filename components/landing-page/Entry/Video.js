import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1000;
  overflow: hidden;
`;

const Vid = styled.video`
  height: 130% !important;
  position: relative;
`;

const Darklayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  background-color: #2e0347;
  opacity: 0.4;
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
