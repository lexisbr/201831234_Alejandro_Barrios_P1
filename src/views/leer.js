
var input = myForm.myInput;
var reader = new FileReader;
var palabrasReservadas = ["if","for","while","int","char","String"]; 
/*var arreglo = [
  ['posicion1', 'posicion2']
];*/

var automata = new Array(9);
for(var i=0;i<10;i++)
{
  automata[i]= new Array(10);
  automata[0][i]= i;
  console.log(automata[0][i])
}
/*for(var i=0;i<automata.length;i++)
{
  for(var i=0;i<automata[].length;i++)
  {
    console.log(automata[0][i])
  }
}*/


//[A-Z][a-z]
automata[1][0]=1;
automata[1][1]=1;
//[0-9]
automata[2][0]=2;
automata[2][1]=1;
automata[2][2]=2;
automata[2][3]=4;
automata[2][4]=4;
//[.]
automata[3][2]=3;
//[",;]
automata[4][0]=5;
//[{,},(,)]
automata[5][0]=6;
//[+,-,*,/,=,==,%,>,<]
automata[6][0]=7;
//[<,>]
automata[7][0]=8;
//[=]
automata[8][8]=9;




for(var i=0;i<9;i++)
{
  for(var o=0;o<10;o++){
    
    //console.log(o+" "+automata[i][o]);
  }
}


input.addEventListener('change', onChange);


function onChange(event) {
  var file = event.target.files[0];
  
  reader.readAsText(file);
  
  reader.onload = onLoad;
  
}

function onLoad() {
  var result = reader.result; // Obtienes el texto
  // En tu ejemplo lo obtienes de una petición HTTP
  
  var lineas = result.split('\n');
  var caracter;
  
  // o lineas.forEach(function(linea){ ... })
  // o lineas.find(function(linea){ return linea == contraseña })
  console.log(linea);
  for(var linea of lineas) {
  for(var i=0; i<3;i++){
    console.log(">>"+linea);
    for(var o=0;0<10;o++){
      console.log(">>"+linea.charAt(o));
    }
//console.log(">>"+linea.charAt(i));
    /*  if(linea.value.charAt(0)>=65&&linea.value.charAt(0)<=122){
        caracter=1;
      switch(automata[1][i]){
          case 1:
              if(linea.value.charAt(i)>=65&&linea.value.charAt(i)<=122&&linea.value.charAt(i)>=48&&linea.value.charAt(i)<=57){
                
                switch(automata[1][1]){
                  case 1:

            

                }
              }
            break;
          default:{
            co
          }

      }*/
    }
      if(linea === palabrasReservadas[i]) {
     // console.log(input.valueAt(i))
    console.log(linea+" >>Palabra Reservada<<");
    }
  
  }
  
}
