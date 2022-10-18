import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: end;

  @media screen and (max-width: 858px) {
    align-items: center;
  }
`;

export const AboutSectionContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  @media screen and (max-width: 858px) {
    gap: 0rem;
    flex-flow: column;
  }
`;

export const Alien = styled.img`
  max-width: 14rem;
`;

export const Text = styled.p`
  letter-spacing: 0.124rem;
  text-align: end;
  line-height: 30.49px;
  color: white;
  margin-bottom: 0.5rem;
  font-size: 18px;

  @media screen and (max-width: 858px) {
    text-align: center;
  }
`;
