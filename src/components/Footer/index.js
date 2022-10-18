import opendev from "../../assets/opendev.svg";
import { Github } from "../../assets/SocialIcons/Github";
import { Opencollective } from "../../assets/SocialIcons/Opencollective";
import { Twitter } from "../../assets/SocialIcons/Twitter";
import { Instagram } from "../../assets/SocialIcons/Instagram";
import { Discord } from "../../assets/SocialIcons/Discord";
import {
  InnerWrapper,
  SocialLinks,
  Wrapper,
  InfoContainer,
  Info,
} from "./styles";

export const Footer = () => {
  const ICONSCOLOR = "#071456";

  return (
    <Wrapper>
      <InnerWrapper>
        <img
          src={opendev}
          alt="Logo da opendev (dois simbolos maior que e menor que) azul"
        />
        <InfoContainer>
          <SocialLinks>
            <Github url="https://github.com/OpenDevUFCG/" color={ICONSCOLOR} />
            <Opencollective
              url="https://opencollective.com/opendevufcg"
              color={ICONSCOLOR}
            />
            <Twitter
              url=" https://twitter.com/OpenDevUFCG"
              color={ICONSCOLOR}
            />
            <Instagram
              url="https://www.instagram.com/opendevufcg/"
              color={ICONSCOLOR}
            />
            <Discord url="https://discord.gg/jSFq7XyGe3" color={ICONSCOLOR} />
          </SocialLinks>
          <Info>opendevufcg@gmail.com</Info>
          <Info>github.com/OpenDevUFCG</Info>
        </InfoContainer>
      </InnerWrapper>
    </Wrapper>
  );
};
