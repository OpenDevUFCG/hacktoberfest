import { Card, Title, Info, Divider } from "./styles";
import PropTypes from "prop-types";

/**
 * Componente de Atividade do dia do evento
 * @param {title, info} props "title" é o título da atividade
 * que será realizada e "info" pode ser o nome do palestrante ou
 * alguma informação extra sobre a atividade.
 *
 * Somente "title" é obrigatória, "info" é opcional.
 * @returns
 */
const Activity = ({ title, info }) => {
  return (
    <Card>
      <Title>{title}</Title>

      {info && (
        <>
          <Divider />
          <Info>{info}</Info>
        </>
      )}
    </Card>
  );
};

Activity.prototypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
};

Activity.defaultProps = {
  title: "---",
};

export default Activity;
