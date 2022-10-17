import { Card, Titulo, Info, Divisor } from "./styles"
import PropTypes from "prop-types"

/**
 * Componente de Atividade do dia do evento
 * @param {titulo, info} props "titulo" é o título da atividade
 * que será realizada e "info" pode ser o nome do palestrante ou 
 * alguma informação extra sobre a atividade.
 * 
 * Somente "titulo" é obrigatória, "info" é opcional.
 * @returns 
 */
const Activity = (props) => {
    return (
        <Card>
            <Titulo>
                {props.titulo}
            </Titulo>

            {props.info ? (
                <>
                <Divisor />
                <Info>
                    {props.info}
                </Info>
                </>
            ) : ""}

        </Card>

    )
}

Activity.prototypes = {
    titulo: PropTypes.string.isRequired,
    info: PropTypes.string
}

Activity.defaultProps = {
    titulo: "---"
}

export default Activity