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
`;

export const InnerWrapper = styled.div`
  margin-top: 2rem;
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: flex-;
  justify-content: space-between;
`;
