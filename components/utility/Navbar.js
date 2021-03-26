import React from "react";
import Link from "next/link";
import styled from "styled-components";
import BurgerIcon from "./HamburgerMenu";
import Image from "next/image";

const StyledNav = styled.nav`
  position: relative;
  left: 0;
  width: 100vw;
  height: 2.7rem;
  display: flex;
  background: #2e0347;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  z-index: 1000;


  a {
    padding-bottom: 0;
    margin-right: 5rem;
    font-weight: 400;
    font-size: 20px;
    :hover {
      border-bottom 1px solid #fff;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const Navbar = ({ className }) => {

  return (
    <StyledNav className={className}>
      <Image src="https://res.cloudinary.com/djiqhmzqs/image/upload/v1616774310/Public/oGr%C3%A6tz_light_jeq4sk.svg" width={75} height={38} />
      <div role="navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <BurgerIcon />
      </div>
    </StyledNav>
  );
};

export default Navbar;
