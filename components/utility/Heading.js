import styled from "styled-components";

const Header = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

const Heading = styled(Header)`
  color: #2e0347;
  font-size: 2.5rem;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export default Heading;
