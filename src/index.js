
function cifrarTexto() {
  let cifrarTexto = document.getElementById("cajaDeTexto").value;
  let saltos = document.getElementById("espacios").value;
  let asciiLetter =0;
  let conversion;
  let nuevoCaracter = '';
  for (let i=0; i<cifrarTexto.length ;i++){
    asciiLetter = (cifrarTexto.charCodeAt(i)+ parseInt(saltos));
    //alert(asciiLetter)
    if (asciiLetter>64 && asciiLetter<91){
      conversion= String.fromCharCode(asciiLetter);
      nuevoCaracter = nuevoCaracter + conversion;
  
   } 
    /*else{
      let vueltaCifrado = (asciiLetter) - 25;
      conversion= String.fromCharCode(vueltaCifrado);
      nuevoCaracter = nuevoCaracter + conversion;
    } */
  } 
  document.getElementById("mensaje1").style.display = "block";
  document.getElementById("printTextBox").innerHTML = "Tu texto cifrado es  " + nuevoCaracter;
  
}

function descifrarTexto(){
  let descifrarTexto = document.getElementById("cajaDeTexto").value;
  
  alert(descifrarTexto);
  let saltos = document.getElementById("espacios").value;
  let asciiLetter;
  let conversion;
  let nuevoCaracter = '';
  for (let i=0; i<descifrarTexto.length ;i++){
    asciiLetter = (descifrarTexto.charCodeAt(i) - parseInt(saltos));
  //alert(asciiLetter);
  if (asciiLetter>64 && asciiLetter<91){
    conversion= String.fromCharCode(asciiLetter);
    nuevoCaracter = nuevoCaracter + conversion;
  } 
  /*else{
    let vueltaDescifrado = (asciiLetter) + 25;
    conversion= String.fromCharCode(vueltaDescifrado);
      nuevoCaracter = nuevoCaracter + conversion;
  
  } */
  //alert(asciiLetter);
  document.getElementById("mensaje1").style.display = "block";
  document.getElementById("printTextBox").innerHTML = "Tu texto cifrado es  " + nuevoCaracter;
}
} 
