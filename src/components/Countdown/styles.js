import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  padding: 0.5rem;
  border: 0.25rem solid var(--orange-dark);
  background-color: var(--orange-darkest);
  border-radius: 0.825rem;
  text-align: center;

  @media screen and (max-width: 858px) {
    border-radius: 0.625rem;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Eater", cursive !important;
  letter-spacing: 0.145rem;

  @media screen and (max-width: 858px) {
    font-size: 1.25rem;
  }
`;
