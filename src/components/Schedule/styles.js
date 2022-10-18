import styled from "styled-components";
import { SectionTitle } from "../../util/generalStyles";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 90vw;
  max-width: 100%;
  margin: 0 auto;
`;

export const Title = styled(SectionTitle)`
  text-align: start;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  border-radius: 1.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0rem 1rem;

  @media screen and (max-width: 750px) {
    padding: 2rem 1rem;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Time = styled.p`
  color: var(--white);
  min-width: 10rem;
  font-size: 20px;
  font-style: italic;
  text-align: center;
  font-weight: bold;
`;

export const Activities = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: scroll;
  width: 100%;

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--white);
    opacity: 0.6;
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    height: 0.4rem;
    padding: 0.25rem;
  }
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 2rem 0;

  @media screen and (max-width: 750px) {
    margin: 0 auto;
    padding: 0;
  }
`;
