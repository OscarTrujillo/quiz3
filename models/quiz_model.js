var AbstractQuiz = require('../models/abstract_quiz_model.js');


function Respuesta(answer){
    
  if (typeof(answer) === "function"){
    return answer();
  }
  
  if (typeof(answer) === 'string'|| typeof(answer) === 'number'){
    return function (x) {return x==answer;};
  }
  
  if(answer instanceof RegExp){
    return function(x){return (answer).exec(x);};
  }
  
}







function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: '¿Capital de Italia?',
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },
     { pregunta: '¿Serie de televisión más vista en el mundo?',
      respuesta: new Respuesta(/^\s*house\s*$/i)
      
    },
    { pregunta: 'Nombre de la montaña más alta del mundo:',
      respuesta: new Respuesta(/^\s*everest\s*$/i)
      
    },
    
    { pregunta: 'Isla más grande del archipiélago Canario',
      respuesta: new Respuesta(/^\s*tenerife\s*$/i)
      
    },
    
    { pregunta: 'Según la película "Guía del autoestopísta galáctico", ¿Cuál es el sentido de la vida?',
      respuesta: new Respuesta(42)
    },
    
    { 
      pregunta: '¿Que famoso dijo la siguiente frase? "Sólo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer" ',
      respuesta: new Respuesta(/^\s*turing\s*$/i)
    },
         
    { 
      pregunta: '¿De que color es el cielo?',
      respuesta: new Respuesta(/^\s*azul\s*$/i)
    },  
    
    
    {
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: new Respuesta(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)|(reyes\s+cat[oó]licos)\b/i)
      
    },
    
    
    
    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado',
      respuesta: function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      }
    }
  );
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
   var self  = this;
  for(var i = 0; i<1;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      var n2 = Math.randomInt(9)+1;
      self.q.push(
        { pregunta: '¿ '+n1+'x'+n2+"= ?",
          respuesta: new Respuesta(n1*n2)
      })
    })();
  }
}


Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;


