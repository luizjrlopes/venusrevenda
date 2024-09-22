import React from "react";
import Produto1 from "./../../assets/Harmonic/197.png";
import Produto2 from "./../../assets/Harmonic/297.png";
import Produto3 from "./../../assets/Retinol/397.png";
import * as S from "./styles.js";
import { Section, Title, Products, Product } from "./styles";

function ProductHighlights() {
  return (
    <Section className="product-highlights">
      <Title>Produtos Populares</Title>
      <Products className="products">
        <Product className="product">
          <img src={Produto1} alt="Produto 1" />
          <S.Button
            type="button"
            onClick={() =>
              (window.location.href =
                "https://ev.braip.com/ref?pl=pla52jnz&ck=che2z0mp&af=afine1jo3v")
            }
          >
            COMPRAR AGORA
          </S.Button>
        </Product>

        <Product className="product">
          <img src={Produto2} alt="Produto 2" />
          <S.Button
            type="button"
            onClick={() =>
              (window.location.href =
                "https://ev.braip.com/ref?pl=pla7xowg&ck=che2z0mp&af=afine1jo3v")
            }
          >
            COMPRAR AGORA
          </S.Button>
        </Product>

        <Product className="product">
          <img src={Produto3} alt="Produto 3" />
          <S.Button
            type="button"
            onClick={() =>
              (window.location.href =
                "https://ev.braip.com/ref?pl=plalx69o&ck=chel0mv4&af=afi4vm2njd")
            }
          >
            COMPRAR AGORA
          </S.Button>
        </Product>
      </Products>
    </Section>
  );
}

export default ProductHighlights;
