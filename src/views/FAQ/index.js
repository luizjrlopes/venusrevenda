import React from "react";
import { Container, Title, Section, Question, Answer } from "./styles";

const Faq = () => {
  return (
    <Container>
      <Title>Perguntas Frequentes (FAQ)</Title>

      <Section>
        <Question>
          1. Como posso fazer uma compra no site Vênus Revenda?
        </Question>
        <Answer>
          Para fazer uma compra em nosso site, siga os passos abaixo:
          <ul>
            <li>
              Navegue pelos nossos produtos e clique em "Adicionar ao Carrinho"
              no item que deseja comprar.
            </li>
            <li>
              Após selecionar todos os produtos, clique no ícone do carrinho de
              compras e depois em "Finalizar Compra".
            </li>
            <li>
              Insira seus dados de entrega e escolha a forma de pagamento.
            </li>
            <li>
              Revise seu pedido e clique em "Confirmar Compra". Você receberá um
              e-mail de confirmação.
            </li>
          </ul>
        </Answer>
      </Section>

      <Section>
        <Question>2. Quais são as formas de pagamento aceitas?</Question>
        <Answer>
          Aceitamos as seguintes formas de pagamento:
          <ul>
            <li>
              Cartão de crédito (Visa, MasterCard, American Express, etc.)
            </li>
            <li>Boleto bancário</li>
            <li>Pix</li>
            <li>PayPal</li>
          </ul>
        </Answer>
      </Section>

      <Section>
        <Question>3. Como acompanho meu pedido?</Question>
        <Answer>
          Após a confirmação do pagamento, você receberá um e-mail com as
          informações de rastreamento do seu pedido. Você também pode acompanhar
          o status do pedido entrando em sua conta no nosso site e acessando a
          seção "Meus Pedidos".
        </Answer>
      </Section>

      <Section>
        <Question>4. Qual é o prazo de entrega?</Question>
        <Answer>
          O prazo de entrega varia de acordo com sua localização e o método de
          envio escolhido. Geralmente, os pedidos são entregues entre 5 a 10
          dias úteis. Durante períodos de alta demanda, como feriados, o prazo
          de entrega pode ser estendido.
        </Answer>
      </Section>

      <Section>
        <Question>5. Posso alterar ou cancelar meu pedido?</Question>
        <Answer>
          Você pode alterar ou cancelar seu pedido antes do envio entrando em
          contato com nossa equipe de atendimento ao cliente o mais rápido
          possível. Se o pedido já foi enviado, será necessário aguardar a
          entrega e seguir nossa Política de Devolução para realizar a troca ou
          devolução do produto.
        </Answer>
      </Section>

      <Section>
        <Question>6. Como faço para devolver um produto?</Question>
        <Answer>
          Se você deseja devolver um produto, por favor, consulte nossa{" "}
          <a href="/venusrevenda/PoliticaDeDevolucao">Política de Devolução</a>{" "}
          para obter mais informações sobre as condições e o procedimento de
          devolução.
        </Answer>
      </Section>

      <Section>
        <Question>
          7. O que devo fazer se receber um produto com defeito?
        </Question>
        <Answer>
          Se você receber um produto com defeito, entre em contato conosco
          imediatamente. O defeito será analisado e, se confirmado, você poderá
          optar pela troca ou reembolso do valor pago.
        </Answer>
      </Section>

      <Section>
        <Question>8. Vocês oferecem frete grátis?</Question>
        <Answer>
          Oferecemos frete grátis em pedidos acima de R$ [valor] para
          determinadas regiões. Durante promoções especiais, também podemos
          oferecer frete grátis para todas as compras, independentemente do
          valor.
        </Answer>
      </Section>

      <Section>
        <Question>
          9. Como posso entrar em contato com o atendimento ao cliente?
        </Question>
        <Answer>
          Você pode entrar em contato conosco através do seguinte e-mail e
          telefone:
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contato@venusrevenda.com">
              contato@venusrevenda.com
            </a>
          </p>
          <p>
            <strong>Telefone:</strong> (79) 98134-2544
          </p>
        </Answer>
      </Section>

      <Section>
        <Question>10. Meus dados pessoais estão seguros?</Question>
        <Answer>
          Sim, levamos a segurança dos seus dados muito a sério. Todas as
          informações fornecidas em nosso site são protegidas por medidas de
          segurança avançadas e são utilizadas apenas para processar e enviar
          seu pedido, conforme descrito em nossa{" "}
          <a href="/venusrevenda/Politica">Política de Privacidade</a>.
        </Answer>
      </Section>
    </Container>
  );
};

export default Faq;
