import styled from "styled-components";

const ImageComponent = ({ className, src }) => {
  return <img src={src} className={className} />;
};

const StyledImageComponent = styled(ImageComponent)`
  width: ${(props) => (props.width ? `${props.width}px` : "200px")};
  height: ${(props) => (props.height ? `${props.height}px` : "200px")};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media(max-width: 1000px){
    width: ${props => props.phoneWidth ? `${props.phoneWidth}` : ""}
  }
`;

export default StyledImageComponent;
