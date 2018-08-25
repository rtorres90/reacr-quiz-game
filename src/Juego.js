import React from 'react';
import NuevaPregunta from './NuevaPregunta';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Question from './Question';
import Option from './Option';

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
        this.nuevaOpcion = this.nuevaOpcion.bind(this);
        this.manejarCambiosOpcion = this.manejarCambiosOpcion.bind(this);

    }

    nuevaPregunta() {
        let nuevaPregunta = new Question('');
        nuevaPregunta.index = this.state.preguntas.length;
        this.setState({ 'mostrarPregunta': true, 'preguntaActual': nuevaPregunta });
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
        let preguntaActual = this.state.preguntaActual;
        preguntaActual.pregunta = event.target.value;

        this.setState({ 'preguntaActual': preguntaActual });
    }

    manejarCambiosOpcion(event) {
        let preguntaActual = this.state.preguntaActual;
        let opcion = preguntaActual.opciones[parseInt(event.target.id)];
        opcion.name = event.target.value;
        this.setState({
            'preguntaActual': preguntaActual
        });
    }

    nuevaOpcion() {
        let preguntaActual = this.state.preguntaActual;
        let nuevoIndice = preguntaActual.opciones.length;
        preguntaActual.opciones.push(new Option(nuevoIndice));
        this.setState({
            'preguntaActual': preguntaActual
        });
    }


    render() {
        return (
            <div>
                <Button bsStyle='primary' onClick={() => this.nuevaPregunta()}>Añadir Pregunta</Button>
                <div>
                    {this.state.mostrarPregunta &&
                        <NuevaPregunta pregunta={this.state.preguntaActual}
                            grabarPregunta={this.grabarPregunta}
                            manejarCambios={this.manejarCambios}
                            nuevaOpcion={this.nuevaOpcion}
                            manejarCambiosOpcion={this.manejarCambiosOpcion}>
                        </NuevaPregunta>}
                </div>
            </div>
        );
    }
}



export default Juego;