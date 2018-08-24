import React from 'react';
import NuevaPregunta from './NuevaPregunta';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Question from './Question';

class Juego extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas: [],
            mostrarPregunta: false,
            preguntaActual: null,
        };

        this.manejarCambios = this.manejarCambios.bind(this);
        this.grabarPregunta = this.grabarPregunta.bind(this);

    }

    nuevaPregunta() {
        this.setState({ 'mostrarPregunta': true, 'preguntaActual': new Question('') });
    }

    grabarPregunta() {
        let preguntas = this.state.preguntas.slice();
        preguntas.push(this.state.preguntaActual);
        this.setState({
            'mostrarPregunta': false,
            'preguntaActual': null,
            'preguntas': preguntas,
        });
        console.log(preguntas);
    }

    manejarCambios(event) {
        let pregunta = new Question(event.target.value);
        this.setState({ 'preguntaActual': pregunta });
    }


    render() {
        return (
            <div>
                <Button bsStyle='primary' onClick={() => this.nuevaPregunta()}>Añadir Pregunta</Button>
                <div>
                    {this.state.mostrarPregunta &&
                        <NuevaPregunta pregunta={this.state.preguntaActual}
                            grabarPregunta={this.grabarPregunta}
                            manejarCambios={this.manejarCambios}>
                        </NuevaPregunta>}
                </div>
            </div>
        );
    }
}



export default Juego;