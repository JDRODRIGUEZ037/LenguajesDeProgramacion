
// Obtenemos los elementos del DOM
const numeroInput = document.getElementById('numero');
const comprobarButton = document.getElementById('comprobar');
const resultadoParagraph = document.getElementById('resultado');

// Función para comprobar si un número es palindrómico
function esPalindromo(numero) {
  // Convertimos el número a string para poder compararlo
  const numeroString = numero.toString();
  // Comparamos el número con su reverso
  return numeroString === numeroString.split('').reverse().join('');
}

// Evento para el botón de comprobar
comprobarButton.addEventListener('click', () => {
  // Obtenemos el valor del input
  const numero = parseInt(numeroInput.value);
  // Comprobamos si el número es palindrómico
  const esPalindromoResult = esPalindromo(numero);
  // Mostramos el resultado
  resultadoParagraph.textContent = `El número ${numero} ${esPalindromoResult ? 'es' : 'no es'} palindrómico`;
});

