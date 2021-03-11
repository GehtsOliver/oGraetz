import React from "react";
import Link from "next/link";
import styled from "styled-components";
import BurgerIcon from "./HamburgerMenu";
import Image from "next/image";

const Navbar = ({ burgerClicked, setBurgerClicked, className }) => {
  return (
    <nav className={className}>
      <Image src="/oGrætz_light.svg" width={75} height={38} />
      <div role="navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/contact">Contact</Link>
        <BurgerIcon
          burgerClicked={burgerClicked}
          setBurgerClicked={setBurgerClicked}
        />
      </div>
    </nav>
  );
};

const StyledNavbar = styled(Navbar)`
  position: relative;
  left: 0;
  width: 100vw;
  height: 2.5rem;
  display: flex;
  background: #000;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  z-index: 1000;

  h1 {
    color: ${(props) => (props.dark ? "#000" : "#fff")};
  }
  a {
    padding-bottom: 0.3rem;
    margin-right: 5rem;
    font-weight: 600;
    font-size: 20px;
    :hover {
      transform: scale(1.05, 1.05, 1.05);
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

export default StyledNavbar;
