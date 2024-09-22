import React, { useState } from "react";
import {
  Container,
  Header,
  Section,
  Title,
  Form,
  Label,
  Input,
  Button,
} from "./styles";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleContact = () => {
    const message = `Olá, meu nome é ${name}. Meu e-mail é ${email}. Motivo do contato: ${motivo}.`;
    const whatsappUrl = `https://wa.me/5579981342544?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Container>
      <Section>
        <Form>
          <Label>Nome:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
          />
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
          />
          <Label>Motivo:</Label>
          <Input
            type="text"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder="Motivo do contato"
          />
          <Button onClick={handleContact}>Entrar em contato</Button>
        </Form>
      </Section>
    </Container>
  );
}

export default Contato;
