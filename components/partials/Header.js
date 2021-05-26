import Link from "next/link";
import styled from "styled-components";
import BurgerIcon from "./utils/BurgerIcon";
import ImageComponent from "../utility/ImageComponent";

const StyledHeader = styled.nav`
  position: relative;
  left: 0;
  width: 100vw;
  height: 5vh;
  display: flex;
  background: #2e0347;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  z-index: 1000;


  a {
    color: white !important;
    font-weight: 600 !important;
    text-transform: none !important;
    text-decoration: none;
    padding-bottom: 0;
    margin-right: 5rem;
    font-size: 20px;
    :hover {
      border-bottom 2px solid #fff;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const Header = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <ImageComponent
        src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774310/Public/oGr%C3%A6tz_light_jeq4sk.svg"
        width={75}
        height={38}
      />
      <div role="navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <BurgerIcon />
      </div>
    </StyledHeader>
  );
};

export default Header;
