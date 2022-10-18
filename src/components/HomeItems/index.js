import React from "react";
import hacktoberfest from "../../assets/hacktoberfest.svg";
import catAlien from "../../assets/catAlien.svg";
import logoOpenDev from "../../assets/logoOpenDev.png";
import {
  ButtonsArea,
  CatAlienLittle,
  CatAlienBig,
  Hacktoberfest,
  LogoOpenDev,
  Wrapper,
} from "./styles";
import { Buttons } from "../Button";

export const HomeItems = () => {
  return (
    <>
      <Wrapper>
        <LogoOpenDev
          src={logoOpenDev}
          alt="logo da OpenDevUFCG que representa os símbolos de maior e menor ligados nas cores laranja e cinza claro com um chapéu rosa"
        />
        <Hacktoberfest
          src={hacktoberfest}
          alt="nome hacktoberfest escrito em um formato de letra irregular na cor laranja"
        />
      </Wrapper>
      <CatAlienLittle
        src={catAlien}
        alt="Gato no controle de uma nave espacial em tamanho pequeno"
      />
      <CatAlienBig
        src={catAlien}
        alt="Gato no controle de uma nave espacial em tamanho pequeno"
      />
      <ButtonsArea>
        <Buttons
          color="#F8A362"
          text="Contribua"
          link="https://opencollective.com/opendevufcg/projects/hacktoberfest2022"
        />
        <Buttons color="#F1EBD8" text="Inscreva-se" link="" />
      </ButtonsArea>
    </>
  );
};
