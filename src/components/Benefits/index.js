import React, { useState } from "react";
import * as S from "./styles.js";
function Benefits() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleBenefit = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <S.Section>
      <S.BenefitsTitle>Por Que Comprar Conosco?</S.BenefitsTitle>
      <S.SubSection>
        <S.Bloco1>
          <S.BenefitsTitle>Promoção Especial</S.BenefitsTitle>
          <S.BenefitDescription>
            Ao realizar uma compra acima de R$ 150,00, você terá a chance de
            participar do nosso sorteio mensal e concorrer a um Pix de R$ 50,00.
          </S.BenefitDescription>
          <S.BenefitDescription>
            Os sorteios são realizados todo mês, para participar basta atingir o
            valor mínimo de compra e entrar em contato com nossa equipe de
            suporte.
          </S.BenefitDescription>
        </S.Bloco1>
        <S.Bloco2>
          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(0)}>
              Garantia de Segurança dos Dados
              <S.ExpandIcon>{activeIndex === 0 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 0 && (
              <>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Utilizamos tecnologia de criptografia avançada para proteger
                    suas informações pessoais e financeiras. Seus dados estão
                    seguros conosco.
                  </li>
                </S.BenefitDescription>
                <S.BenefitDescription>
                  <li>
                    Nosso site cumpre com todos os padrões de segurança online,
                    garantindo transações seguras.
                  </li>
                </S.BenefitDescription>
              </>
            )}
          </S.BenefitItem>

          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(1)}>
              Qualidade e Autenticidade dos Produtos
              <S.ExpandIcon>{activeIndex === 1 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 1 && (
              <>
                <S.BenefitDescription>
                  <li>
                    Trabalhamos apenas com fornecedores de confiança e
                    garantimos a autenticidade e qualidade de todos os produtos.
                  </li>
                </S.BenefitDescription>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Cada produto passa por um rigoroso processo de verificação
                    antes de ser enviado a você.
                  </li>
                </S.BenefitDescription>
              </>
            )}
          </S.BenefitItem>

          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(2)}>
              Garantia de Satisfação e Política de Devolução
              <S.ExpandIcon>{activeIndex === 2 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 2 && (
              <S.BenefitDescription>
                <li>
                  Acesse a Página{" "}
                  <a href="/venusrevenda/PoliticaDeDevolucao">
                    Política de Devolução
                  </a>
                </li>
                .
              </S.BenefitDescription>
            )}
          </S.BenefitItem>

          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(3)}>
              Avaliações e Testemunhos de Clientes
              <S.ExpandIcon>{activeIndex === 3 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 3 && (
              <>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Confira as avaliações de nossos clientes! Sua confiança é
                    nossa maior recompensa.
                  </li>
                </S.BenefitDescription>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Veja o que nossos clientes dizem! Avaliações reais e
                    testemunhos que mostram nossa dedicação em oferecer o
                    melhor.
                  </li>
                </S.BenefitDescription>
              </>
            )}
          </S.BenefitItem>

          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(4)}>
              Atendimento ao Cliente de Excelência
              <S.ExpandIcon>{activeIndex === 4 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 4 && (
              <>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Nossa equipe de atendimento ao cliente está disponível das 8
                    horas até 18:00, de Segunda a Sexta, para ajudar com
                    qualquer dúvida ou problema que possa ter.
                  </li>
                </S.BenefitDescription>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Suporte rápido e amigável, pronto para resolver qualquer
                    questão, seja antes, durante ou após a compra.
                  </li>
                </S.BenefitDescription>
              </>
            )}
          </S.BenefitItem>

          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(5)}>
              Informações Claras sobre Entrega
              <S.ExpandIcon>{activeIndex === 5 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 5 && (
              <>
                <S.BenefitDescription>
                  <li> Entrega rápida e segura.</li>
                </S.BenefitDescription>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Entrega garantida: se o seu pedido não chegar, devolvemos o
                    seu dinheiro.
                  </li>
                </S.BenefitDescription>
              </>
            )}
          </S.BenefitItem>

          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(6)}>
              Certificações e Selos de Confiança
              <S.ExpandIcon>{activeIndex === 6 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 6 && (
              <>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Somos uma loja séria, garantindo práticas éticas e seguras
                    em todas as nossas operações.
                  </li>
                </S.BenefitDescription>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Confira os selos de qualidade e confiança, durante o
                    checkout, comprovando nosso compromisso com a segurança e a
                    satisfação do cliente.
                  </li>
                </S.BenefitDescription>
              </>
            )}
          </S.BenefitItem>

          <S.BenefitItem>
            <S.BenefitHeader onClick={() => toggleBenefit(7)}>
              Facilidade de Navegação e Compra
              <S.ExpandIcon>{activeIndex === 7 ? "-" : "+"}</S.ExpandIcon>
            </S.BenefitHeader>
            {activeIndex === 7 && (
              <>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Nosso site foi projetado pensando em você: navegação
                    intuitiva e processo de compra simples e rápido.
                  </li>
                </S.BenefitDescription>
                <S.BenefitDescription>
                  <li>
                    {" "}
                    Compras seguras e descomplicadas, com suporte em cada etapa
                    para garantir uma experiência sem preocupações.
                  </li>
                </S.BenefitDescription>
              </>
            )}
          </S.BenefitItem>
        </S.Bloco2>
      </S.SubSection>
    </S.Section>
  );
}

export default Benefits;
