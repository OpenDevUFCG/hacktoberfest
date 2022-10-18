import styled from "styled-components";

export const Card = styled.article`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 22.5rem;
  min-height: fit-content;
  height: 100%;
  padding: 2rem 1.25rem;
  gap: 1.25rem;
  background-color: var(--medium-dark-blue);
  border-radius: 0.75rem;
`;

export const Title = styled.h5`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.25;
  text-align: center;
  color: var(--white);
  text-shadow: 0px 0px 42px rgba(255, 255, 255, 0.25);
`;

export const Info = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  color: var(--white);
`;

export const Divider = styled.hr`
  width: 2.5rem;
`;
