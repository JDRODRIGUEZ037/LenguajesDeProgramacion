// PRINCIPALES FUNCIONES MATEMATICAS INTERNAS DE JAVA SCRIPT.

// Ejemplo 1: Precio redondeado con Math.round()
// Math.round() redondea el número al entero más cercano. 
// Si el decimal es 0.5 o mayor, redondea hacia arriba, si es menor que 0.5, redondea hacia abajo.
var precio = Math.round(599.45);  // Decimal es 0.45, redondea hacia abajo
document.write('El precio de este artículo redondeado es: ', precio); // Resultado: 599
document.write('<br>');

// Ejemplo 2: Precio redondeado con Math.ceil()
// Math.ceil() siempre redondea hacia arriba al siguiente entero más grande, independientemente del valor decimal.
var precio = Math.ceil(4359.9);  // El decimal es 0.9, por lo que sube al siguiente entero
document.write('El precio redondeado con ceil es: ', precio); // Resultado: 4360
document.write('<br>');

// Ejemplo 3: Precio redondeado con Math.floor()
// Math.floor() siempre redondea hacia abajo al entero más pequeño, sin importar el valor decimal.
var precio = Math.floor(540.2);  // El decimal es 0.2, redondea hacia abajo
document.write('El precio redondeado con floor es: ', precio); // Resultado: 540
document.write('<br>');

// Seno de un angulo
var seno = Math.sin (45);
document.write ('El valor del angulo 45 es: , seno');
document.write ('<br>');

// Coseno de un angulo
var coseno = Math.cos (38);
document.write ('El coseno del angulo de 38 es:', coseno);
document.write ('<br>');

// Tangente de un angulo
var tangente = Math.tan (38);
document.write ('La tangente del angulo de 38 es:', tangente);
document.write ('<br>');

//Exponencial de un numero
var exponencial = Math.exp (7);
document.write ('Expnencial de 7 es:', exponencial);
document.write ('<br>');

// Logaritmo de un numero
var logaritmo = Math.log (75);
document.write ('El logaritmo de 75 es:', logaritmo);
document.write ('<br>');

//Valor absoluto
var absoluto = Math.abs (-85);
document.write ('El valor absoluto de 85 es:', absoluto);
document.write ('<br>');

// Numero maximo
var maximo = Math.max (7, 36, 99, 294);
document.write ('El valor mayor es:', maximo);
document.write ('<br>');

// Numero minimo
var minimo = Math.min (15, 36, 99, 294);
document.write ('El valor minimo es: ',minimo);
document.write ('<br>');

// Nuemero aleatorio en decimales
var aleatorio = Math.random();
document.write ('El valor aleatorio: ',aleatorio);
document.write ('<br>');

// Numero aleatorio del 1 al 10 en decimales
var aleatorio = Math.random()*10;
document.write ('El valor aleatorio: ',aleatorio);
document.write ('<br>');

//Numero aleatorio redondeado
var aleatorio = Math.round (Math.random()*8);
document.write ('El valor aleatorio: ',aleatorio);
document.write ('<br>');

//Raiz cuadrada de un numero
var valor = Math.sqrt(49);
document.write('La raiz cuadrada de 49 es: ', valor);
document.write('<br>');

// calcular exponente de un mumero
var exponente = Math.pow(4,3);
document.write('El valor de 4 elevado a la 2 es:', exponente);
document.write('<br>');