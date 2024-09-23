import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  ContactInfo,
  Disclaimer,
  Copyright,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="#/Politica">Política de Privacidade</a>
          <a href="#/TermosDeServico">Termos de Serviço</a>
          <a href="#/PoliticaDeDevolucao">Política de Devolução</a>
          <a href="#/FAQ">FAQ</a>
        </FooterLinks>
        <ContactInfo>
          <p>Email: contato@venusrevenda.com</p>
          <p>Telefone/wpp: (79) 98134-2544</p>
        </ContactInfo>

        <div className="social-media">
          <a href="#">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </FooterContent>
      <Copyright>
        &copy; 2024 Vênus Revenda - Todos os direitos reservados.
      </Copyright>
      <Disclaimer>
        Este site é loja parceira das empresas produtoras.
      </Disclaimer>
    </FooterContainer>
  );
}

export default Footer;
