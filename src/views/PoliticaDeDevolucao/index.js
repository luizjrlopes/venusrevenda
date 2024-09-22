import React from "react";
import {
  Container,
  Title,
  Section,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
} from "./styles";

const PoliticaDeDevolucao = () => {
  return (
    <Container>
      <Title>Política de Devolução</Title>

      <Section>
        <Paragraph>
          <strong>Última atualização:</strong> 21/09/2024
        </Paragraph>
        <Paragraph>
          Na <strong>Vênus Revenda</strong>, a satisfação do cliente é nossa
          prioridade. Se você não estiver completamente satisfeito com sua
          compra, oferecemos a seguinte Política de Devolução para garantir uma
          experiência de compra tranquila e segura.
        </Paragraph>
      </Section>

      <Section>
        <Title>1. Condições para Devolução</Title>
        <Paragraph>
          Aceitamos devoluções de produtos nas seguintes condições:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Prazo de Devolução:</strong> O pedido de devolução deve ser
            feito dentro de 7 dias corridos após o recebimento do produto,
            conforme previsto no Código de Defesa do Consumidor.
          </ListItem>
          <ListItem>
            <strong>Estado do Produto:</strong> O produto deve estar em sua
            embalagem original, sem sinais de uso, com todas as etiquetas e
            lacres intactos, e acompanhado de todos os acessórios e manuais.
          </ListItem>
          <ListItem>
            <strong>Produtos Não Elegíveis:</strong> Alguns produtos, como itens
            de higiene pessoal, cosméticos, produtos perecíveis, e produtos
            personalizados, não são elegíveis para devolução.
          </ListItem>
        </List>
      </Section>

      <Section>
        <Title>2. Procedimento de Devolução</Title>
        <Paragraph>
          Se você deseja devolver um produto, siga os passos abaixo:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Entre em Contato:</strong> Envie um e-mail para{" "}
            <a href="mailto:contato@venusrevenda.com">
              contato@venusrevenda.com
            </a>{" "}
            com seu nome, número do pedido, e o motivo da devolução.
          </ListItem>
          <ListItem>
            <strong>Aguarde a Aprovação:</strong> Após receber seu pedido de
            devolução, nossa equipe analisará sua solicitação e, se aprovada,
            fornecerá as instruções para o envio do produto.
          </ListItem>
          <ListItem>
            <strong>Envie o Produto:</strong> Envie o produto para o endereço
            fornecido, seguindo as instruções que você receberá. O custo do
            envio de devolução será de responsabilidade do cliente, exceto em
            casos de produtos com defeito ou envio incorreto.
          </ListItem>
        </List>
      </Section>

      <Section>
        <Title>3. Reembolsos</Title>
        <Paragraph>
          Os reembolsos serão processados nas seguintes condições:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Forma de Reembolso:</strong> O reembolso será realizado
            utilizando o mesmo método de pagamento utilizado na compra original.
          </ListItem>
          <ListItem>
            <strong>Prazo para Reembolso:</strong> Após recebermos e
            inspecionarmos o produto devolvido, processaremos o reembolso em até
            10 dias úteis. O prazo para que o crédito apareça em sua conta pode
            variar dependendo do método de pagamento e da instituição
            financeira.
          </ListItem>
          <ListItem>
            <strong>Produtos com Defeito ou Envio Incorreto:</strong> Se o
            produto devolvido apresentar defeito de fabricação ou se houver erro
            no envio, o reembolso incluirá o custo do produto e as despesas de
            envio.
          </ListItem>
        </List>
      </Section>

      <Section>
        <Title>4. Trocas</Title>
        <Paragraph>
          Caso você deseje trocar um produto, o processo será semelhante ao de
          devolução:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Entre em Contato:</strong> Envie um e-mail para{" "}
            <a href="mailto:contato@venusrevenda.com">
              contato@venusrevenda.com
            </a>{" "}
            com seu nome, número do pedido, e detalhes da troca solicitada.
          </ListItem>
          <ListItem>
            <strong>Aguarde a Aprovação:</strong> Nossa equipe analisará sua
            solicitação e fornecerá as instruções para a troca.
          </ListItem>
          <ListItem>
            <strong>Envie o Produto:</strong> Envie o produto para o endereço
            fornecido. O custo do envio será de responsabilidade do cliente,
            exceto em casos de defeito ou envio incorreto.
          </ListItem>
        </List>
      </Section>

      <Section>
        <Title>5. Produtos com Defeito</Title>
        <Paragraph>
          Se você recebeu um produto com defeito, entre em contato conosco
          imediatamente. O defeito será analisado e, se confirmado, você terá
          direito ao reembolso completo ou à troca do produto, conforme sua
          preferência.
        </Paragraph>
      </Section>

      <Section>
        <Title>6. Cancelamento de Pedidos</Title>
        <Paragraph>
          Você pode cancelar seu pedido antes do envio entrando em contato com
          nossa equipe. Se o pedido já foi enviado, será necessário seguir o
          procedimento de devolução após o recebimento do produto.
        </Paragraph>
      </Section>

      <Section>
        <Title>7. Contato</Title>
        <ContactInfo>
          <Paragraph>
            Se você tiver dúvidas ou precisar de assistência com uma devolução,
            entre em contato com nosso serviço de atendimento ao cliente:
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong>{" "}
            <a href="mailto:contato@venusrevenda.com">
              contato@venusrevenda.com
            </a>
          </Paragraph>
          <Paragraph>
            <strong>Telefone:</strong> (79) 98134-2544
          </Paragraph>
          <Paragraph>
            <strong>Endereço:</strong> Rua Orlando Sobral dos Santos, 32,
            Aracaju, SE, Brasil
          </Paragraph>
        </ContactInfo>
      </Section>
    </Container>
  );
};

export default PoliticaDeDevolucao;
