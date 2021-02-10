import React from "react";
import Link from "next/link";
import styled from "styled-components"

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  z-index: 1000;
  a {
    margin-right: 5rem;
    font-weight: 200;
    font-size: 30px;
    @media (max-width: 1000px){
        display: none;
    }
  }

`;

const Header = () => {
  return (
    <Navbar>
      <h1>oGraetz</h1>
      <nav>
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
      </nav>
    </Navbar>
  );
};

export default Header;
