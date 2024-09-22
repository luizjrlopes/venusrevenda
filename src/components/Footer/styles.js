import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.footer.background};
  color: ${(props) => props.theme.colors.footer.text};
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  a {
    color: ${(props) => props.theme.colors.footer.text};
    text-decoration: none;
    margin: 0.5rem 0;

    &:hover {
      color: ${(props) => props.theme.colors.footer.accent};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    a {
      margin: 0 1rem;
    }
  }
`;

export const ContactInfo = styled.div`
  p {
    margin: 0.5rem 0;
  }
`;

export const Disclaimer = styled.p`
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
