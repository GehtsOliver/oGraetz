import React from "react";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Project = ({ project, className }) => {
  const tagsArr = project.Tags.split(",");
  return (
    <Link href={`/projects/${project.id}`}>
      <article className={className}>
        <h1>{project.title}</h1>
        <Image
          alt={project.title}
          width={400}
          height={200}
          src={project.Image.url}
        />
        <p>{project.Excerpt}</p>
        <div>
          {project.Tags ? tagsArr.map((tag) => <div key={tag}>{tag}</div>) : ""}
        </div>
      </article>
    </Link>
  );
};

const ProjectItem = styled(Project)`
  color: #000;
  width: 25rem;
  border-radius: 2rem;
  padding: 0.5rem 2rem;

  cursor: pointer;
  box-shadow: 0.3rem 0.3rem 10px 0px #2e0347;

  :hover {
    transform: scale3d(1.01, 1.01, 1.01);
    transition: all 1s;
  }

  > div {
    display: flex;
    column-gap: 1rem;
  }

  > div > div {
    background: #2e0347;
    color: #fff;
    font-weight: bold;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 0.3rem;
  }
`;

export default ProjectItem;
