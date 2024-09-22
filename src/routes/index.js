import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/venusrevenda" element={<Home />} />
            <Route path="/venusrevenda/Politica" element={<Politica />} />
            <Route
              path="/venusrevenda/PoliticaDeDevolucao"
              element={<PoliticaDeDevolucao />}
            />
            <Route
              path="/venusrevenda/TermosDeServico"
              element={<TermosDeServico />}
            />
            <Route path="/venusrevenda/FAQ" element={<FAQ />} />
            <Route path="/venusrevenda/SobreNos" element={<SobreNos />} />
            <Route path="/venusrevenda/Contato" element={<Contato />} />
            <Route path="/venusrevenda/Loja" element={<Loja />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default Rotas;
