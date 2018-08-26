import React from 'react';
import Question from './Question';
import { Button } from 'react-bootstrap';

class NuevaPregunta extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let manejarCambiosOpcion = this.props.manejarCambiosOpcion;
        let manejarOpcionCorrecta = this.props.manejarOpcionCorrecta;
        let indicePregunta = this.props.pregunta.index;
        let namesList = this.props.pregunta.opciones.map((opcion) => {
            return <li key={opcion.index}>
                <input type="text" name={opcion.index} id={opcion.index}
                    value={opcion.name}
                    onChange={manejarCambiosOpcion} />
                <input type="radio" name={indicePregunta} id={opcion.index}
                    onClick={manejarOpcionCorrecta} />
            </li>;
        });

        return (
            <div>
                <h3>Nueva pregunta</h3>
                <label id='pregunta'>Pregunta: </label>
                <input type="text" name="pregunta" id="pregunta"
                    value={this.props.pregunta.pregunta}
                    onChange={this.props.manejarCambios} />
                <ul>{namesList}</ul>
                <Button bsStyle='info' onClick={this.props.nuevaOpcion}>Agregar opción</Button>
                <Button bsStyle='success' onClick={this.props.grabarPregunta}>Grabar Pregunta</Button>
            </div>
        );
    }
}

export default NuevaPregunta;