
var input = myForm.myInput;
var reader = new FileReader;
/*var arreglo = [
  ['posicion1', 'posicion2']
];*/

/*var automata = new Array(2);
automata[0]= new Array(2);
automata[1]= new Array(2);
for(var i=0;i<4;i++)
{
  automata[0][i]="S"+i;
}
automata[1][0]="letra";
automata[1][1]="digito";
for(var i=0;i<automata.length;i++)
{
  for(var o=0;o<automata.length;o++){
    console.log(automata[o][i]);
  }
}*/

var palabrasReservadas = ["if","for","while","int","char","String"]; 
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
  
  
  // o lineas.forEach(function(linea){ ... })
  // o lineas.find(function(linea){ return linea == contraseña })
  for(var linea of lineas) {
    for(var i=0; i<3;i++){
    if(linea === palabrasReservadas[i]) {
     // console.log(input.valueAt(i))
    console.log(linea+" >>Palabra Reservada<<");
    }
  }
  }
  
}
