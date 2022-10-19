import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 858px) {
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  border-radius: 1.5rem;
  box-shadow: 0px 4px 47px rgba(255, 255, 255, 0.25);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 4rem;

  @media screen and (max-width: 858px) {
    gap: 2rem;
    padding: 2rem 1.5rem;
  }
`;
