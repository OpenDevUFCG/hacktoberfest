import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 8rem;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    height: 6rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ItemLink = styled.li`
  display: flex;
  font-weight: bold;
  gap: 2.5rem;

  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }

  @media screen and (max-width: 600px) {
    gap: 0.8rem;
  }
`;

export const Link = styled.a`
  font-family: "Eater", cursive;
  letter-spacing: 0.145rem;
  text-decoration: none;
  color: #d9d9d9;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    font-size: 11px;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 8px;
  }

  &:hover {
    color: #f8a362;
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 1030px) {
    display: none;
  }
`;
