"use stric";

var Pregunta = require('../models/pregunta.js');

function PreguntaSeleccionMultiple(quest, options){
    
    Pregunta.call(this, quest,options);
    this.intro = "";
    var opciones="";
      for(var i = 0; i<options.length;i++){
        this.intro += "<input type='checkbox' name='respuesta[]' value='"+options[i]+"'>"+options[i]+"<br>";
        //opciones += "<option value='"+options[i]+"'>"+options[i]+"</option> <br>";
      }
      
      //this.intro = "<select name='respuesta[]' multiple>"+opciones+"</select>"
      
}

module.exports = PreguntaSeleccionMultiple;