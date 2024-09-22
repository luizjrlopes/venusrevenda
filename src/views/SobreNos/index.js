import React from "react";
import {
  Container,
  Header,
  Section,
  Title,
  Subtitle,
  Text,
  List,
  ListItem,
  Footer,
} from "./styles";

function SobreNos() {
  return (
    <Container>
      <Section>
        <Subtitle>Quem Somos</Subtitle>
        <Text>
          Na Vênus Revenda, somos apaixonados por conectar nossos clientes aos
          melhores produtos disponíveis no mercado. Atuando como afiliados de
          diversas empresas confiáveis, oferecemos uma plataforma segura e fácil
          de usar, onde você pode encontrar produtos de alta qualidade de forma
          rápida e segura.
        </Text>
      </Section>
      <Section>
        <Subtitle>Nossa Visão</Subtitle>
        <Text>
          Ser reconhecido como o principal portal de referência para produtos de
          qualidade e confiança, proporcionando aos consumidores uma experiência
          de compra online segura, eficiente e satisfatória.
        </Text>
      </Section>
      <Section>
        <Subtitle>Nossa Missão</Subtitle>
        <Text>
          Facilitar o acesso a produtos de alta qualidade através de parcerias
          com empresas confiáveis, oferecendo um site seguro e informativo onde
          os consumidores podem tomar decisões de compra com confiança.
        </Text>
      </Section>
      <Section>
        <Subtitle>Nossos Valores</Subtitle>
        <List>
          <ListItem>
            <strong>Transparência:</strong> Agimos com integridade, fornecendo
            informações claras e verdadeiras sobre os produtos e serviços que
            recomendamos.
          </ListItem>
          <ListItem>
            <strong>Confiança:</strong> Valorizamos a confiança dos nossos
            clientes e parceiros, e trabalhamos continuamente para merecê-la em
            cada interação.
          </ListItem>
          <ListItem>
            <strong>Excelência no Atendimento:</strong> Nos dedicamos a oferecer
            um atendimento ao cliente exemplar, sendo rápidos e eficazes na
            resolução de problemas.
          </ListItem>
          <ListItem>
            <strong>Segurança:</strong> Comprometemo-nos a proteger os dados e a
            privacidade dos nossos clientes, garantindo transações seguras e
            confiáveis.
          </ListItem>
          <ListItem>
            <strong>Inovação:</strong> Estamos sempre buscando novas formas de
            melhorar a experiência do usuário e de agregar valor aos nossos
            serviços.
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

export default SobreNos;
