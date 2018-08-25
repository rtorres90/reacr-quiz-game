class Question {
    constructor(pregunta) {
        this.index = -1;
        this.pregunta = pregunta;
        this.opciones = [];
        this.opcionCorrecta = null;
    }
}

export default Question;