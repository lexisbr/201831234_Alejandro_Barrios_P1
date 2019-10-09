
var input = myForm.myInput;
var reader = new FileReader;
var palabrasReservadas = ["if","for","while"]; 
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
