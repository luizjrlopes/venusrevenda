import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // Alterado para HashRouter
import { ThemeProvider } from "styled-components";
import theme from "./../assets/theme";
import Home from "./../views/Home";
import Politica from "./../views/Politica";
import PoliticaDeDevolucao from "./../views/PoliticaDeDevolucao";
import TermosDeServico from "./../views/TermosDeServico";
import FAQ from "./../views/FAQ";
import SobreNos from "./../views/SobreNos";
import Contato from "./../views/Contato";
import Loja from "./../views/Produtos";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

class Rotas extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          {" "}
          {/* Substituído por HashRouter */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Politica" element={<Politica />} />
            <Route
              path="/PoliticaDeDevolucao"
              element={<PoliticaDeDevolucao />}
            />
            <Route path="/TermosDeServico" element={<TermosDeServico />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Loja" element={<Loja />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default Rotas;
