import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
`;

export const Header = styled.header`
  background-color: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Subtitle = styled.h2`
  color: #333;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Text = styled.p`
  color: #555;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 40px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

export const Footer = styled.footer`
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
`;
