import styled from "styled-components";
import { SectionTitle } from "../../util/generalStyles";

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  height: fit-content;

  @media screen and (max-width: 1090px) {
    flex-flow: column;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 2rem;
  align-items: end;
  font-family: "Eater", cursive !important;

  @media screen and (max-width: 1090px) {
  }
`;

export const Title = styled(SectionTitle)`
  text-align: start;
`;

export const Cat = styled.img`
  max-width: 10rem;
  position: relative;
  transform: translateY(3rem);
  @media screen and (max-width: 1090px) {
    width: 7rem;
  }
`;

export const BiggerImage = styled.img`
  max-width: 70%;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 1090px) {
    max-width: 100%;
  }
`;

export const SmallerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  @media screen and (max-width: 1090px) {
    width: 49%;
  }
`;

export const SmallerContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-grow: fit-content;
  box-sizing: border-box;
  max-width: 30%;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1090px) {
    max-width: 100%;
    flex-flow: row;
  }
`;
