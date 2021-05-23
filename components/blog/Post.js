import styled from "styled-components";
import Link from "next/link";

const StyledPost = styled.article`
  width: 30vw;
  display: flex;
  column-gap: 2rem;
  font-size: 1.1rem;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem;
    line-height: 1.3;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

const Post = ({ post }) => {
  return (
    <StyledPost>
      <div className="flex-column">
        <Link href={`/blog/${post.id}`}>
          <a>
            <h1>{post.title}</h1>
          </a>
        </Link>
        <p>Posted on {new Date(post.date).toLocaleDateString()}</p>
        <p>{post.excerpt}</p>
      </div>
    </StyledPost>
  );
};

export default Post;
