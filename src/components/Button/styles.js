import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;
  padding: 0 0.8rem;
  height: 3rem;
  font-family: "Eater", cursive;
  font-size: 1.25rem;
  color: var(--dark-blue);
  border-radius: 16px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.20s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.20s ease-in-out;
  }

  @media screen and (max-width: 820px) {
    font-size: 1rem;
    height: 2.5rem;
    border-radius: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    height: 2.5rem;
    border-radius: 12px;
  }
`;
