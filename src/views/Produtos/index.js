import React, { useState } from "react";
import {
  Container,
  TopSide,
  Title,
  SearchBar,
  Section,
  SubTitle,
  ProductList,
  ProductName,
  ProductItem,
  ProductImage,
  BuyButton,
  LineFilter,
} from "./styles";

import Produto1 from "./../../assets/Harmonic/197.png";
import Produto2 from "./../../assets/Harmonic/297.png";
import Produto3 from "./../../assets/Retinol/397.png";

const initialProducts = [
  {
    id: 1,
    name: "Harmonic Hair 1 Frasco",
    supplier: "Harmonic",
    line: "Cabelo",
    imageUrl: Produto1,
    buyUrl: "https://ev.braip.com/ref?pl=pla52jnz&ck=che2z0mp&af=afine1jo3v",
  },
  {
    id: 2,
    name: "Harmonic Hair 3 Frasco",
    supplier: "Harmonic",
    line: "Cabelo",
    imageUrl: Produto2,
    buyUrl: "https://ev.braip.com/ref?pl=pla7xowg&ck=che2z0mp&af=afine1jo3v",
  },
  {
    id: 3,
    name: "Retinol 1 Frasco",
    supplier: "Retinol",
    line: "Rosto",
    imageUrl: Produto3,
    buyUrl: "https://ev.braip.com/ref?pl=plalx69o&ck=chel0mv4&af=afi4vm2njd",
  },
  // Adicione mais produtos conforme necessário
];

function Produtos() {
  const [products] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLine, setSelectedLine] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLineChange = (e) => {
    setSelectedLine(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLine = selectedLine === "" || product.line === selectedLine;
    return matchesSearch && matchesLine;
  });

  const suppliers = [
    ...new Set(filteredProducts.map((product) => product.supplier)),
  ];

  const lines = [...new Set(products.map((product) => product.line))];

  return (
    <Container>
      <TopSide>
        <Title>Ofertas de Produtos</Title>
        <SearchBar
          type="text"
          placeholder="Buscar produto..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <LineFilter value={selectedLine} onChange={handleLineChange}>
          <option value="">Todas as Linhas</option>
          {lines.map((line) => (
            <option key={line} value={line}>
              {line}
            </option>
          ))}
        </LineFilter>
      </TopSide>
      {suppliers.map((supplier) => (
        <Section key={supplier}>
          <SubTitle>{supplier}</SubTitle>
          {filteredProducts
            .filter((product) => product.supplier === supplier)
            .reduce((lines, product) => {
              const line = product.line;
              if (!lines.includes(line)) lines.push(line);
              return lines;
            }, [])
            .map((line) => (
              <div key={line}>
                <h3>Produtos para: {line}</h3>
                <ProductList>
                  {filteredProducts
                    .filter(
                      (product) =>
                        product.supplier === supplier && product.line === line
                    )
                    .map((product) => (
                      <ProductItem key={product.id}>
                        <ProductName>{product.name}</ProductName>
                        <ProductImage
                          src={product.imageUrl}
                          alt={product.name}
                        />
                        <BuyButton
                          type="button"
                          onClick={() =>
                            (window.location.href = product.buyUrl)
                          }
                        >
                          COMPRAR AGORA
                        </BuyButton>
                      </ProductItem>
                    ))}
                </ProductList>
              </div>
            ))}
        </Section>
      ))}
    </Container>
  );
}

export default Produtos;
