import { SectionTitle } from "../../util/generalStyles";
import { Container, Wrapper } from "./styles";
import { Clicampo } from "../../assets/sponsors/Clicampo";
import Sponsor from "../Sponsor";

export const SponsorsSection = () => {
  const patrocinadores = [{ logo: <Clicampo />, nome: "clicampo" }];

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
