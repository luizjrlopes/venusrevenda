import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="/venusrevenda/Politica">Política de Privacidade</a>
          <a href="/venusrevenda/TermosDeServico">Termos de Serviço</a>
          <a href="/venusrevenda/PoliticaDeDevolucao">Política de Devolução</a>
          <a href="/venusrevenda/FAQ">FAQ</a>
        </div>
        <div className="contact-info">
          <p>Email: contato@venusrevenda.com</p>
          <p>Telefone/wpp: (79) 98134-2544</p>
        </div>
        {/*
        <div className="social-media">
          <a href="#">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
        </div>
         */}
      </div>
      <p>&copy; 2024 Vênus Revenda - Todos os direitos reservados.</p>
      <p className="disclaimer">
        Este site é loja parceira das empresas produtoras.
      </p>
    </footer>
  );
}

export default Footer;
