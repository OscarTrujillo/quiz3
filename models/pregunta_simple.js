"use stric";

var Pregunta = require('../models/pregunta.js');

function PreguntaSeleccionSimple(quest, options){
    
    Pregunta.call(this, quest);
    this.intro = "";
      for(var i = 0; i<options.length;i++){
        this.intro += "<input type='radio' name='respuesta' value='"+options[i]+"'>"+options[i]+"<br>";
      }
      
}

module.exports = PreguntaSeleccionSimple;