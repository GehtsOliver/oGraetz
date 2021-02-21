import React from "react";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Project = ({ project, className }) => {
  const tags = project.tags.map(tag => <div>{tag}</div>)

  return (
    <Link href={`/projects/${project.title}`}>
      <article className={className}>
        <h1>{project.title}</h1>
        <Image
          alt={project.title}
          width={400}
          height={200}
          src={`/${project.image}`}
        />
        <p>{project.excerpt}</p>
        <div>{tags}</div>
      </article>
    </Link>
  );
};

const ProjectItem = styled(Project)`
color: black;
width: 25rem;
border-radius: 2rem;
padding: .5rem 2rem;

cursor: pointer;

:hover{
  box-shadow: .5rem .5rem 10px 0px #2e0347;
transform: scale3d(1.01,1.01,1.01);
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
