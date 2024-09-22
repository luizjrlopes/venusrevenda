import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const ImageLogo = styled.img`
  width: 90px;
  height: 70px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 2rem;

      a {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;

        &:hover {
          color: #ffcc00;
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? "0" : "-250px")};
    height: 100%;
    width: 250px;
    background-color: #007bff;
    transition: right 0.3s ease;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      flex-direction: column;
      align-items: center;

      li {
        margin: 1.5rem 0;
      }
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
