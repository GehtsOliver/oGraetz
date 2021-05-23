import styled from "styled-components";

const BackButton = ({ className }) => {
  const clickHandler = () => {
    window.history.back();
  };

  return (
    <a className={className} onClick={clickHandler}>
      <i className="fas fa-arrow-left fa-2x"></i>
    </a>
  );
};

const StyledBackButton = styled(BackButton)`
  position: absolute;
  left: 10rem;
  top: 10rem;
  width: 4rem;
  height: 4rem;

  border-radius: 100%;
  border: 1px solid ${(props) => (props.color ? props.color : "#2E0347")};

  color: ${(props) => (props.color ? props.color : "#2E0347")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
  :hover {
    transform: scale3d(1.2, 1.2, 1.2);
    transition: all 500ms;
    cursor: pointer;
  }
`;

export default StyledBackButton;
