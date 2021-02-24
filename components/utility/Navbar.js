import React from "react";
import Link from "next/link";
import styled from "styled-components";
import BurgerIcon from "./HamburgerMenu";

const Navbar = ({ burgerClicked, setBurgerClicked, className }) => {
  return (
    <nav className={className}>
      <h1>oGraetz</h1>
      <div role="navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/contact">Hire</Link>
        <BurgerIcon
          burgerClicked={burgerClicked}
          setBurgerClicked={setBurgerClicked}
        />
      </div>
    </nav>
  );
};

const StyledNavbar = styled(Navbar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  z-index: 1000;

  h1{
    color: ${(props) => (props.dark ? "#000" : "#fff")}
  }
  a {
    color: ${(props) => (props.dark ? "#000" : "#fff")};
    padding-bottom: 0.3rem;
    margin-right: 5rem;
    font-weight: 300;
    font-size: 30px;
    :hover {
      border-bottom: 1px solid ${(props) => (props.dark ? "#000" : "#fff")};
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

export default StyledNavbar;