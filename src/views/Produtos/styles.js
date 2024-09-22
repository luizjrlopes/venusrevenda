import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
`;

export const TopSide = styled.header`
  background-color: gray;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
`;

export const SearchBar = styled.input`
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const LineFilter = styled.select`
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: white;
  color: #333;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const SubTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductItem = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 20px);
  box-sizing: border-box;
  text-align: center;
`;

export const ProductName = styled.p`
  font-size: 18px;
  color: #555;
  margin: 10px 0;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const BuyButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
