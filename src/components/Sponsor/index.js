import { Circle, Text, Wrapper } from "./styles";
import PropTypes from "prop-types";

const Sponsor = ({ logo, nome }) => {
  return (
    <Wrapper>
      <Circle>{logo}</Circle>
      <Text>{nome}</Text>
    </Wrapper>
  );
};

Sponsor.prototypes = {
  logo: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default Sponsor;
