function calcular() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);

    let suma = numero1 + numero2 + numero3;
    let resta = numero1 - numero2 - numero3;
    let multiplicacion = numero1 * numero2 * numero3;

    document .getElementById("resultado").innerHTML = `La suma es: ${suma}<br>La resta es: ${resta}<br>La multiplicación es: ${multiplicacion}`;
}