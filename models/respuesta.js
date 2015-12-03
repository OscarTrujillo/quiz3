"use stric";

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
  
  if(answer instanceof Array){
    var respues=0;
    return function(x){
        if(x.length==answer.length){
          
            var tam=answer.length
            for(var i=0;i<tam;i++){
              for(var j=0; j<tam;j++){
                  if (x[i]==answer[j]) {
                    respues++;
                  }
              }
            }
            if (respues==tam){
              respues=0;
              return true;
            }
            else 
              return false;
        }
        else 
          return false;
  }
}
  
}

module.exports = Respuesta;