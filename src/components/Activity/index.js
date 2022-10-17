import { Card, Titulo, Info, Divisor } from "./styles"
import PropTypes from "prop-types"

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
    info: PropTypes.string.isRequired
}

Activity.defaultProps = {
    titulo: "---"
}

export default Activity