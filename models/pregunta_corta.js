"use stric";

var Pregunta = require('../models/pregunta.js');

function PreguntaCorta(quest){
    Pregunta.call(this, quest);
    this.intro = "<input type='text' name='respuesta' placeholder='Responda aquí'>";
}

module.exports = PreguntaCorta;