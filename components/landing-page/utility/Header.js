import React from "react";
import Link from "next/link";
import styled from "styled-components"
import BurgerIcon from "./HamburgerMenu"

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  z-index: 1000;
  a {
    padding-bottom: .3rem;
    margin-right: 5rem;
    font-weight: 200;
    font-size: 30px;
    :hover{
      border-bottom: 1px solid #fff;
    }
    @media (max-width: 1000px){
        display: none;
    }
  }

`;

const Header = ({ burgerClicked, setBurgerClicked}) => {


  return (
    <Navbar>
      <h1>oGraetz</h1>
      <nav role="navigation">
        <Link href="#About">
          About
        </Link>
        <Link href="/projects">
          Projects
        </Link>
        <Link href="/articles">
          Articles
        </Link>
        <Link href="/contact">
          Hire
        </Link>
      <BurgerIcon burgerClicked={burgerClicked} setBurgerClicked={setBurgerClicked}/>
      </nav>
    </Navbar>
  );
};

export default Header;
