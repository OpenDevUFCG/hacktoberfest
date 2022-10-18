import styled from "styled-components";

export const SponsorsIcon = styled.svg`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease;
  }

  @media screen and (max-width: 858px) {
    width: ${(props) => props.width / 2}px;
    height: ${(props) => props.height / 2}px;
  }
`;
