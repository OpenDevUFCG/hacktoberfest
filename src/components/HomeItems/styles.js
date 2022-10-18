import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`;

export const LogoOpenDev = styled.img`
  margin-top: 6rem;

  @media screen and (max-width: 600px) {
    width: 40%;
  }
`;

export const Hacktoberfest = styled.img`
  margin-bottom: 3rem;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const CatAlienLittle = styled.img`
  position: absolute;
  width: 8rem;
  transform: rotate(-45deg);

  @media screen and (max-width: 600px) {
    display: none;
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
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;
