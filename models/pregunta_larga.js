"use stric";

var Pregunta = require('../models/pregunta.js');

function PreguntaLarga(quest){
    Pregunta.call(this, quest);
    this.intro = "<textarea type='text' name='respuesta' placeholder='Responda aquí'></textarea>";
}



module.exports = PreguntaLarga;