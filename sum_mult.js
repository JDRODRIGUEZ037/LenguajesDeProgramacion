function calcular() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
  
    let suma = numero1 + numero2;
    let multiplicacion = numero1 * numero2;
  
    document.getElementById("resultados").innerHTML =
      "LA SUMA: " + suma + " Y LA MULTIPLICACIÓN: " + multiplicacion;
  }