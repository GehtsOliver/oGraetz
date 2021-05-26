import styled from "styled-components";

const Button = styled.a`
   {
    // position: absolute;
    // top: 87%;
    // left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
  > span {
    display: block;
    width: 30px;
    height: 30px;
    border-bottom: 5px solid #fff;
    border-right: 5px solid #fff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 3s infinite;
  }
  > span:nth-child(2) {
    animation-delay: -0.2s;
  }
  > span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`;

const GetToKnowMeButton = () => {
  return (
    <Button href="#about" className="arrow">
      <span></span>
      <span></span>
      <span></span>
    </Button>
  );
};

export default GetToKnowMeButton;
