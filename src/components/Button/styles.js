import styled from "styled-components";

export const Button = styled.button`
  width: fit-content;
  padding: 0 0.8rem;
  height: 3.5rem;
  font-family: "Eater", cursive;
  font-size: 1.5rem;
  color: var(--blue);
  border-radius: 16px;
  background-color: ${(props) => props.color};
  margin-bottom: 2.5rem;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    height: 2.5rem;
    border-radius: 12px;
  }
`;
