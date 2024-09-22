import styled from "styled-components";

export const BenefitsSection = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
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
