import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.sections.benefits};
  text-align: center;
`;

export const SubSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: left; /* Alinhamento à esquerda para texto mais legível */
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Bloco1 = styled.section`
  background-color: ${(props) =>
    props.theme.colors.common.white}; /* Background diferente para destaque */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 2; /* Mais largura para Bloco1 */
  margin-right: 20px; /* Espaço entre os blocos */
`;

export const Bloco2 = styled.section`
  background-color: ${(props) => props.theme.colors.sections.benefits};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1; /* Menos largura para Bloco2 */
`;

export const BenefitsTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const BenefitItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

export const BenefitHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  border-bottom: 1px solid #ddd;
`;

export const BenefitDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-left: 20px;
  margin-top: 10px;
`;

export const ExpandIcon = styled.span`
  font-size: 20px;
  color: #007bff;
`;
