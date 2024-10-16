function calcularEdad() {
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const año = parseInt(document.getElementById("año").value);

    const fechaNacimiento = new Date(año, mes - 1, dia);
    const hoy = new Date();

    let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let meses = hoy.getMonth() - fechaNacimiento.getMonth();
    let dias = hoy.getDate() - fechaNacimiento.getDate();

    if (dias < 0) {
      meses--;
      dias += 30;
    }

    if (meses < 0) {
      años--;
      meses += 12;
    }

    document.getElementById("resultado").innerHTML = `Su edad es: ${años} años con ${meses} meses y ${dias} días de nacido`;
  }