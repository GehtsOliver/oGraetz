import React from "react";
import styled from "styled-components";
import Link from "next/link"

const MenuNode = ({ className }) => {
  return (
    <nav className={className} role="navigation">
      <Link href="#About">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/articles">Articles</Link>
      <Link href="/contact">Hire</Link>
    </nav>
  );
};

const BurgerMenu = styled(MenuNode)`
height: 80%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
row-gap: 2rem;
justify-content: center;
> a {
    color: #fff;
    font-weight: 200;
    font-size: 30px;
}

> a:hover {
    font-weight: 400;
}
`;

export default BurgerMenu;
