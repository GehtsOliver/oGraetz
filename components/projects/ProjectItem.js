import React from "react";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Project = ({ project, className }) => {
  console.log(project);
  let tagsArr = null;
  project.tags ? (tagsArr = project.tags.split(",")) : "";
  return (
    <Link href={`/projects/${project.id}`}>
      <article className={className}>
        <h1>{project.title}</h1>
        <Image
          alt={project.title}
          width={400}
          height={200}
          src={project.img.url}
        />
        <p>{project.excerpt}</p>
        <div>
          {project.tags ? tagsArr.map((tag) => <div key={tag}>{tag}</div>) : ""}
        </div>
      </article>
    </Link>
  );
};

const ProjectItem = styled(Project)`
  color: #000;
  background: #fff;
  width: 20rem;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0.3rem 0.5rem 10px 0px #2e0347;

  :hover {
    transform: scale3d(1.05, 1.05, 1.05);
    transition: all 1s;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 0.5rem;
  }

  > div > div {
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    background: #2e0347;
    color: #fff;
    font-weight: bold;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 0.5rem;
  }
`;

export default ProjectItem;
