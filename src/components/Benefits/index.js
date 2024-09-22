import React, { useState } from "react";
import {
  BenefitsSection,
  BenefitsTitle,
  BenefitItem,
  BenefitDescription,
  BenefitHeader,
  ExpandIcon,
} from "./styles";

function Benefits() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleBenefit = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <BenefitsSection>
      <BenefitsTitle>Por Que Comprar Conosco?</BenefitsTitle>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(0)}>
          Garantia de Segurança dos Dados
          <ExpandIcon>{activeIndex === 0 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 0 && (
          <>
            <BenefitDescription>
              <li>
                {" "}
                Utilizamos tecnologia de criptografia avançada para proteger
                suas informações pessoais e financeiras. Seus dados estão
                seguros conosco.
              </li>
            </BenefitDescription>
            <BenefitDescription>
              <li>
                Nosso site cumpre com todos os padrões de segurança online,
                garantindo transações seguras.
              </li>
            </BenefitDescription>
          </>
        )}
      </BenefitItem>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(1)}>
          Qualidade e Autenticidade dos Produtos
          <ExpandIcon>{activeIndex === 1 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 1 && (
          <>
            <BenefitDescription>
              <li>
                Trabalhamos apenas com fornecedores de confiança e garantimos a
                autenticidade e qualidade de todos os produtos.
              </li>
            </BenefitDescription>
            <BenefitDescription>
              <li>
                {" "}
                Cada produto passa por um rigoroso processo de verificação antes
                de ser enviado a você.
              </li>
            </BenefitDescription>
          </>
        )}
      </BenefitItem>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(2)}>
          Garantia de Satisfação e Política de Devolução
          <ExpandIcon>{activeIndex === 2 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 2 && (
          <BenefitDescription>
            <li>
              Acesse a Página{" "}
              <a href="/venusrevenda/PoliticaDeDevolucao">
                Política de Devolução
              </a>
            </li>
            .
          </BenefitDescription>
        )}
      </BenefitItem>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(3)}>
          Avaliações e Testemunhos de Clientes
          <ExpandIcon>{activeIndex === 3 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 3 && (
          <>
            <BenefitDescription>
              <li>
                {" "}
                Confira as avaliações de nossos clientes! Sua confiança é nossa
                maior recompensa.
              </li>
            </BenefitDescription>
            <BenefitDescription>
              <li>
                {" "}
                Veja o que nossos clientes dizem! Avaliações reais e testemunhos
                que mostram nossa dedicação em oferecer o melhor.
              </li>
            </BenefitDescription>
          </>
        )}
      </BenefitItem>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(4)}>
          Atendimento ao Cliente de Excelência
          <ExpandIcon>{activeIndex === 4 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 4 && (
          <>
            <BenefitDescription>
              <li>
                {" "}
                Nossa equipe de atendimento ao cliente está disponível das 8
                horas até 18:00, de Segunda a Sexta, para ajudar com qualquer
                dúvida ou problema que possa ter.
              </li>
            </BenefitDescription>
            <BenefitDescription>
              <li>
                {" "}
                Suporte rápido e amigável, pronto para resolver qualquer
                questão, seja antes, durante ou após a compra.
              </li>
            </BenefitDescription>
          </>
        )}
      </BenefitItem>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(5)}>
          Informações Claras sobre Entrega
          <ExpandIcon>{activeIndex === 5 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 5 && (
          <>
            <BenefitDescription>
              <li> Entrega rápida e segura.</li>
            </BenefitDescription>
            <BenefitDescription>
              <li>
                {" "}
                Entrega garantida: se o seu pedido não chegar, devolvemos o seu
                dinheiro.
              </li>
            </BenefitDescription>
          </>
        )}
      </BenefitItem>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(6)}>
          Certificações e Selos de Confiança
          <ExpandIcon>{activeIndex === 6 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 6 && (
          <>
            <BenefitDescription>
              <li>
                {" "}
                Somos uma loja séria, garantindo práticas éticas e seguras em
                todas as nossas operações.
              </li>
            </BenefitDescription>
            <BenefitDescription>
              <li>
                {" "}
                Confira os selos de qualidade e confiança, durante o checkout,
                comprovando nosso compromisso com a segurança e a satisfação do
                cliente.
              </li>
            </BenefitDescription>
          </>
        )}
      </BenefitItem>

      <BenefitItem>
        <BenefitHeader onClick={() => toggleBenefit(7)}>
          Facilidade de Navegação e Compra
          <ExpandIcon>{activeIndex === 7 ? "-" : "+"}</ExpandIcon>
        </BenefitHeader>
        {activeIndex === 7 && (
          <>
            <BenefitDescription>
              <li>
                {" "}
                Nosso site foi projetado pensando em você: navegação intuitiva e
                processo de compra simples e rápido.
              </li>
            </BenefitDescription>
            <BenefitDescription>
              <li>
                {" "}
                Compras seguras e descomplicadas, com suporte em cada etapa para
                garantir uma experiência sem preocupações.
              </li>
            </BenefitDescription>
          </>
        )}
      </BenefitItem>
    </BenefitsSection>
  );
}

export default Benefits;
