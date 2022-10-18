import styled from "styled-components";
import lua from "../../assets/lua.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16rem;
  background-image: url(${lua});
  background-position: center;
  background-position: top;
  margin-top: 8rem;
`;

export const InnerWrapper = styled.div`
  margin-top: 2rem;
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 1rem;
`;

export const Info = styled.p`
  font-size: 18px;
  color: var(--dark-blue);
  font-weight: bold;
`;
