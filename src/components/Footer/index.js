import { InnerWrapper, Wrapper } from "./styles";
import opendev from "../../assets/opendev.svg";

export const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <img src={opendev} />
        <img src={opendev} />
      </InnerWrapper>
    </Wrapper>
  );
};
