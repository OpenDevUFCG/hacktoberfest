import { SectionTitle } from "../../util/generalStyles";
import { Container, Wrapper } from "./styles";
import { Clicampo } from "../../assets/sponsors/Clicampo";
import Sponsor from "../Sponsor";
import { LSD } from "../../assets/sponsors/LSD";
import codex from "../../assets/sponsors/codex.png";

export const SponsorsSection = () => {
  const patrocinadores = [
    { logo: <Clicampo />, nome: "clicampo" },
    { logo: <LSD />, nome: "Lab. de Sistemas distribuídos" },
    {
      logo: <img src={codex} alt="X colorido com fundo preto" />,
      nome: "Code Jr.",
    },
  ];

  return (
    <Wrapper id="patrocinadores">
      <SectionTitle>Patrocinadores</SectionTitle>
      <Container>
        {patrocinadores.map(({ nome, logo }) => (
          <Sponsor nome={nome} logo={logo} key={nome} />
        ))}
      </Container>
    </Wrapper>
  );
};
