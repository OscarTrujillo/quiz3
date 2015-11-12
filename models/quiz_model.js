var AbstractQuiz = require('../models/abstract_quiz_model.js');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    },
     { pregunta: '¿Serie de televisión más vista en el mundo?',
      respuesta: function(x) {
        return (/^\s*house\s*$/i).exec(x);
      }
    },
    { pregunta: 'Nombre de la montaña más alta del mundo:',
      respuesta: function(x) {
        return (/^\s*everest\s*$/i).exec(x);
      }
    },
    { pregunta: 'Isla más grande del archipiélago Canario',
      respuesta: function(x) {
        return (/^\s*tenerife\s*$/i).exec(x);
      }
    },
    { pregunta: 'Según la película "Guía del autoestopísta galáctico", ¿Cuál es el sentido de la vida?',
      respuesta: function(x) {
        return (42);
      }
    },
    
        { 
      pregunta: '¿Que famoso dijo la siguiente frase? "Sólo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer" ',
      respuesta: function(x) {
        return (/^\s*turing\s*$/i).exec(x);
      }
    },
         
         { pregunta: '¿De que color es el cielo?',
      respuesta: function(x) {
        return (/^\s*azul\s*$/i).exec(x);
      }
    },
    
    
    {
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
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
          respuesta: function(x) {
            return (x == n1*n2);
        }
      })
    })();
  }
}


Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
