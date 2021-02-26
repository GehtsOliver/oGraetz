import React from "react";

import styled from "styled-components";
import Image from "next/image";

const Main = styled.main`
  background: #2e0347;
  width: 80%;
  height: 40rem;
  border-radius: 2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;

  section > div > img {
    border-radius: 30px;
  }

  .tag {
    background: #fff;
    color: #000;
    border-radius: 20px;
    padding: 0.5rem;
    font-weight: bold;
  }

  p {
    color: #fff;
  }
`;

const ProjectBody = ({ project }) => {
  const tagsArr = project.tags.split(",");

  return (
    <Main>
      <section>
        <h1>{project.title}</h1>
        <div>
          {tagsArr.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </div>
        <p>{project.description}</p>
        <p>Technologies used: {project.stack}</p>
      </section>
      <section>
        <Image width={700} height={350} src={project.img.url} />
      </section>
    </Main>
  );
};

export default ProjectBody;
