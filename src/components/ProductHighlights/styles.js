import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.sections.productHighlights};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  max-width: 300px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #555;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #888;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: green;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
