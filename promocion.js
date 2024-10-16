function calcularDescuento() {
    const valorMoto = parseFloat(document.getElementById('valorMoto').value);
    const marcaMoto = document.getElementById('marcaMoto').value;
    let descuentoPorcentaje;

    // Validar si el valor de la moto es correcto
    if (isNaN(valorMoto) || valorMoto <= 0) {
        document.getElementById('resultado').textContent = "Por favor, ingrese un valor válido.";
        return;
    }

    // Determinación del porcentaje de descuento según la marca
    switch (marcaMoto.toUpperCase()) {
        case "HONDA":
            descuentoPorcentaje = 0.05; // 5%
            break;
        case "YAMAHA":
            descuentoPorcentaje = 0.08; // 8%
            break;
        case "SUZUKI":
            descuentoPorcentaje = 0.10; // 10%
            break;
        default:
            descuentoPorcentaje = 0.02; // 2% para otras marcas
            break;
    }

    // Cálculo del descuento y valor final
    const descuento = valorMoto * descuentoPorcentaje;
    const valorFinal = valorMoto - descuento;

    // Mostrar resultado con uso correcto de template literals
    document.getElementById('resultado').textContent = 
        `El valor original de la moto es: ${valorMoto.toLocaleString()}.\n` +
        `Se aplica un descuento del ${(descuentoPorcentaje * 100).toFixed(0)}% (${descuento.toLocaleString()}).\n` +
        `El valor final es: ${valorFinal.toLocaleString()}.`;
}
