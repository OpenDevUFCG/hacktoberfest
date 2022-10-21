import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;

  img {
    max-width: 150px;
  }

  @media screen and (max-width: 858px) {
    width: 5rem;
    height: 5rem;

    img {
      width: 50px;
    }
  }
`;

export const Text = styled.h3`
  font-family: "Eater", cursive !important;
  margin-top: 1rem;
  font-size: 1.5rem;
  max-width: 10rem;
  text-align: center;
  line-height: 1.5;
  color: white;

  @media screen and (max-width: 858px) {
    font-size: 1rem;
  }
`;
