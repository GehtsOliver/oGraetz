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
  top: -8.2rem;
  bottom: 0;
  right: 0;
  left: 0;

  @media (max-width: 1700px) {
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
          src="https://anima-uploads.s3.amazonaws.com/projects/601e5d01c1395392d3d5910b/files/entry-bg-video.mp4"
          type="video/mp4"
        />
      </Vid>
    </VideoContainer>
  );
};

export default Video;
