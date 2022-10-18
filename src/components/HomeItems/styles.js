import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`

export const LogoOpenDev = styled.img`

  @media screen and (max-width: 600px) {
    width: 40%;
  }
`;

export const Hacktoberfest = styled.img`

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const CatAlienLittle = styled.img`
  position: absolute;
  width: 8rem;
  transform: rotate(-45deg);
  bottom: 10rem;
  left: 16rem;
  z-index: 2;

  @media screen and (max-width: 1200px) {
    bottom: 8rem;
    left: 10rem;
  }

  @media screen and (max-width: 1024px) {
    top: 30rem;
    left: -2.5rem;
  }

  @media screen and (max-width: 820px) {
    bottom: 20rem;
    left: 2rem;
  }

  @media screen and (max-width: 600px) {
    bottom: 16rem;
    width: 6rem;
    left: -2rem;
  }

  @media screen and (max-width: 400px) {
    bottom: 10rem;
    width: 6rem;
    left: -3rem;
  }

  @media screen and (max-width: 360px) {
    bottom: 14rem;
    width: 6rem;
    left: -3rem;
  }
`;
export const CatAlienBig = styled.img`
  position: absolute;
  right: 12rem;
  top: 6rem;

  @media screen and (max-width: 1280px) {
    top: 4rem;
    width: 30%;
    left: 70%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    top: 4rem;
    width: 40%;
    left: 60%;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;

`;
