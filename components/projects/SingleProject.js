import React from "react";

import styled from "styled-components";
import Image from "next/image";

const SingleProjectWrapper = styled.main`
  margin-top: 1rem;
  background: #fff;
  width: 60%;
  height: 30rem;
  padding: 2rem;
  border-radius: 2rem;
  color: #2e0347;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;

  h1 {
    font-size: 1.5rem;
    color: #2e0347;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
  }

  section > a > div > img {
    border-radius: 20px;
  }

  article {
    height: 80%;
    width: 30rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    row-gap: 1.5rem;
    color: #2e0347;

    > div {
      display: flex;
      justify-content: flex-start;
    }
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 8rem;
    background: #2e0347;
    color: #fff;
    border-radius: 20px;
    padding: 0.5rem;
    font-weight: bold;
  }

  p {
    color: #2e347;
  }
`;

const SingleProject = ({ project }) => {
  const tagsArr = project.tags.split(",");
  const techArr = project.tech.split(",");
  const usedTech = techArr.map((tech) => (
    <Image
      key={tech}
      width={200}
      height={100}
      src={`/Stack/${tech.trim()}.svg`}
    />
  ));

  return (
    <SingleProjectWrapper>
      <article>
        <h1>{project.title}</h1>
        <div>
          {tagsArr.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <p>{project.description}</p>
        <div>{usedTech}</div>
      </article>
      <section>
        <a href={project.url}>
          <Image width={700} height={350} src={project.img.url} />
        </a>
      </section>
    </SingleProjectWrapper>
  );
};

export default SingleProject;
