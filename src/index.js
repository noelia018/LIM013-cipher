alert("hola");

import cipher from './cipher.js';
//console.log (cipher);

window.onload = () => {
  document.getElementById("pantalla2").style.display="none";
}

//Esconde pantalla1 1 y muestra la pantalla 2
document.getElementById("cifrarBtn()").addEventListener("click",() => {
  document.getElementById("pantalla1").style.display="none";
  document.getElementById("pantalla2").style.display="block";
});

document.getElementById("Decipher").addEventListener("click",() => {
  document.getElementById("pantalla1").style.display="none";
  document.getElementById("pantalla2").style.display="block";
});

//Regresa a la pantalla 1
document.getElementById("resetbtn").addEventListener("click",() => {
  document.getElementById("pantalla2").style.display="none";
  document.getElementById("pantalla1").style.display="block";
});




 


// hace el proceso de cifrado
document.getElementById("cifrarBtn()").addEventListener("click", () => {
  const toEncode = document.getElementById("textArea1").value;
  const offSet = Math.abs(parseInt(document.getElementById("inputOffSet").value));
  let result = cipher.encode(toEncode, offSet)
  document.getElementById("textArea2").innerHTML = result;
});

document.getElementById("resetbtn").addEventListener("click", () => {
 location.reload(true);



});

// Hace el proceso de decifrado

document.getElementById("Decipher").addEventListener("click", () => {
  const toDecode = document.getElementById("textArea1").value;
  const offSet = Math.abs(parseInt(document.getElementById("inputOffSet").value));
  let result = cipher.decode(toDecode, offSet)
  document.getElementById("textArea2").innerHTML = result;
});

document.getElementById("resetbtn").addEventListener("click", () => {
 location.reload(true);



});


