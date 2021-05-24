import styled from "styled-components";
import ImageComponent from "../utility/ImageComponent";
import Link from "next/link";

const ProjectPageWrapper = styled.main`
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  text-align: justify;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    row-gap: 2rem;
    border-radius: 0;
  }

  h1 {
    font-size: 1.7rem;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
  }

  div > a > div > img {
    border-radius: 20px;
  }

  article {
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1.5rem;

    @media (max-width: 1000px) {
      width: 90%;
    }
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 8rem;
    border: 1px solid #2e0347;
    color: #2e0347;
    border-radius: 5px;
    padding: 0.5rem;
    font-weight: bold;
  }
`;

const ProjectPage = ({ project }) => {
  const tagsArr = project.tags.split(",");

  return (
    <ProjectPageWrapper>
      <article>
        <h1>{project.title}</h1>
        <div className="flex-row justify-center">
          {tagsArr.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <p>{project.description}</p>
      </article>
      <Link href={project.url}>
        <a>
          <ImageComponent width={700} height={350} src={project.img.url} />
        </a>
      </Link>
    </ProjectPageWrapper>
  );
};

export default ProjectPage;
