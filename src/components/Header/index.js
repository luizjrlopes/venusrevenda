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
      <ImageLogo src={Logo} alt="Logo Venus Revenda" />

      <MenuButton onClick={toggleMenu}>{isOpen ? "✖" : "☰"}</MenuButton>
      <Nav isOpen={isOpen}>
        <ul>
          <li>
            <a href="#/">Início</a> {/* Atualizado para usar HashRouter */}
          </li>
          <li>
            <a href="#/SobreNos">Sobre Nós</a>{" "}
            {/* Atualizado para usar HashRouter */}
          </li>
          <li>
            <a href="#/Loja">Produtos</a>{" "}
            {/* Atualizado para usar HashRouter */}
          </li>
          {/* 
          <li>
            <a href="#">Blog</a>
          </li>
          */}
          <li>
            <a href="#/Contato">Contato</a>{" "}
            {/* Atualizado para usar HashRouter */}
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
