import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Project = ({ project, className }) => {
  let tagsArr = null;
  project.tags ? (tagsArr = project.tags.split(",")) : "";
  return (
    <article className={className}>
      <Link href={`/projects/${project.id}`}>
        <a>
          <Image
            alt={project.title}
            width={400}
            height={300}
            src={project.img.url}
          />
        </a>
      </Link>

      <div className="flex-column justify-center">
        <h2>{project.title}</h2>
        <p>{project.excerpt}</p>
        <div className="flex-row gap">
          {project.tags && tagsArr.map((tag) => <div key={tag}>{tag}</div>)}
        </div>
        <div className="flex-row gap">
          <Link href={`/projects/${project.id}`}>
            <a className="btn btn-primary">Show More</a>
          </Link>
          <Link href={`${project.url}`}>
            <a className="btn btn-primary">Go To Project</a>
          </Link>
        </div>
      </div>
    </article>
  );
};

const StyledProject = styled(Project)`
  width: 60rem;

  display: flex;
  column-gap: 3rem;

  h2 {
    margin: 0 0;
  }

  img {
    border-radius: 0.5rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    width: 80vw;
    margin: 0 auto;

    div{
      align-items: center;
    }
  }
`;

export default StyledProject;
