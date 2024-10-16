function calcularDescuento() {
    const montoCompra = parseFloat(document.getElementById('monto').value);
    const montoLimite = 100000;
    const descuentoPorcentaje = 0.20;

    // Verificar si el monto ingresado es un número válido
    if (isNaN(montoCompra) || montoCompra <= 0) {
        document.getElementById('resultado').textContent = "Por favor, ingrese un monto válido.";
        return;
    }

    let montoFinal;

    if (montoCompra > montoLimite) {
        const descuento = montoCompra * descuentoPorcentaje;
        montoFinal = montoCompra - descuento;
        
        // Aquí corregimos el uso de backticks (comillas invertidas) y el formato de interpolación
        document.getElementById('resultado').textContent = 
            `El monto original es: ${montoCompra.toLocaleString()}.\nSe aplica un 20 % de descuento (${descuento.toLocaleString()}).\nEl monto final es: ${montoFinal.toLocaleString()}.`;
    } else {
        montoFinal = montoCompra;
        document.getElementById('resultado').textContent = 
            `El monto de la compra es: ${montoFinal.toLocaleString()}.\nNo se aplica ningún descuento.`;
    }
}
