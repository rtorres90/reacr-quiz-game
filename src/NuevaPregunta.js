import React from 'react';
import Question from './Question';
import { Button } from 'react-bootstrap';

class NuevaPregunta extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Nueva pregunta</h3>
                <label id='pregunta'>Pregunta: </label>
                <input type="text" name="pregunta" id="pregunta"
                    value={this.props.pregunta.pregunta}
                    onChange={this.props.manejarCambios} />
                <Button bsStyle='success' onClick={this.props.grabarPregunta}>Grabar Pregunta</Button>
            </div>
        );
    }
}

export default NuevaPregunta;