import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuNode = ({ className }) => {
  return (
    <nav className={className} role="navigation">
      <div>
        <i className="fas fa-home fa-2x"></i>
        <Link href="/">Home</Link>
      </div>
      <div>
        <i className="far fa-address-book fa-2x"></i>
        <Link href="/projects">Projects</Link>
      </div>
      <div>
        <i className="fas fa-rss fa-2x"></i>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <i className="fas fa-envelope fa-2x"></i>
        <Link href="/contact">Hire</Link>
      </div>
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
  color: ${props => props.color};
  
  > div {
    display: flex;
    align-items: center;
  }
  > div > a {
    margin-left: 0.5rem;
    color: ${props => props.color};
   
    font-weight: 300;
    font-size: 30px;
    :hover {
      font-weight: 400;
    }
  }
`;

export default BurgerMenu;
