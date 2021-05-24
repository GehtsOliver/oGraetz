
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PostComponent = styled.div`
  width: 35vw;
  gap: 3rem;

  h1,
  h2,
  h3 {
    margin: 0.2rem 0 !important;
  }

  p {
    text-align: justify;
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    gap: 2rem;
  }
`;

const PostPage = ({ post }) => {
  return (
    <PostComponent className="flex-column justify-center">
      <div>
        <h1>{post.title}</h1>
        <h3>
          {new Date(post.date).toLocaleDateString()} By {post.author}
        </h3>
      </div>
      <Image src={post.img[0].url} width={300} height={350} />
      <article>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </PostComponent>
  );
};

export default PostPage;
