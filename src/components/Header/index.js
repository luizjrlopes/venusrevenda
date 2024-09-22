import React, { useState } from "react";
import { HeaderContainer, Nav, MenuButton, Overlay, ImageLogo } from "./styles";
import Logo from "./../../assets/logo.png";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <ImageLogo src={Logo}></ImageLogo>

      <MenuButton onClick={toggleMenu}>{isOpen ? "✖" : "☰"}</MenuButton>
      <Nav isOpen={isOpen}>
        <ul>
          <li>
            <a href="/venusrevenda">Início</a>
          </li>
          <li>
            <a href="/venusrevenda/SobreNos">Sobre Nós</a>
          </li>
          <li>
            <a href="/venusrevenda/Loja">Produtos</a>
          </li>
          {/*
          <li>
            <a href="#">Blog</a>
          </li>*/}
          <li>
            <a href="/venusrevenda/Contato">Contato</a>
          </li>

          <li>
            <a href="#">{/* <img src="cart-icon.png" alt="Carrinho" /> */}</a>
          </li>
        </ul>
      </Nav>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
    </HeaderContainer>
  );
}

export default Header;
