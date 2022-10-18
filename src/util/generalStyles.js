import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  min-height: 100vh;
  box-sizing: border-box;
  max-width: 1280px;
  padding: 0 1rem;
`;

export const SectionTitle = styled.h2`
  font-family: "Eater", cursive !important;
  letter-spacing: 0.145rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--orange);
  text-align: center;
  line-height: 1.25;
`;

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;
