var unidades = 0;
var descuento = 0;
var pago = 0;
var materias = 0;
var pagoTotal = 0;

var respuestaIncorrecta = true;

while (respuestaIncorrecta) {
  var curso = parseInt(prompt("Ingrese su curso: \n1: Secundaria\n2: Profesional"));
  if (curso === 1 || curso === 2) {
    respuestaIncorrecta = false;
    var cursoTexto = (curso === 1) ? "Secundaria" : "Profesional";
    mostrarTexto("Curso: " + cursoTexto);
  } else {
    mostrarTexto("Valor incorrecto para el curso. Intente nuevamente.");
  }
}

respuestaIncorrecta = true;

while (respuestaIncorrecta) {
  var promedio = parseInt(prompt("Ingrese su promedio: "));
  mostrarTexto("Promedio: " + promedio);

  if (promedio >= 0 && promedio <= 10) {
    respuestaIncorrecta = false;
    if (promedio >= 9.5) {
      unidades = 55;
      descuento = 25;
    } else if (promedio >= 9 && promedio < 9.5) {
      unidades = 50;
      descuento = 10;
    } else if (promedio >= 7) {
      unidades = 50;
    } else {
      respuestaIncorrecta = true;
      var materias = parseInt(prompt("Ingrese el número de materias perdidas: "));
      mostrarTexto("Materias perdidas: " + materias);

      if (materias >= 0 && materias <= 3) {
        unidades = 50;
      } else if (materias > 4) {
        unidades = 40;
      }
    }
  } else {
    mostrarTexto("Valor incorrecto para el promedio. Intente nuevamente.");
  }
}

pagoUnidades = unidades / 5;
porcentajeDescuento = (100 - descuento) / 100;
pago = pagoUnidades * 180;
pagoTotal = descuento > 0 ? pago * porcentajeDescuento : pago;

mostrarTexto("El número de créditos a cursar es: " + unidades);
mostrarTexto("El pago es de: $" + pago);
mostrarTexto("El descuento a aplicar es de: " + descuento + "%");
mostrarTexto("El total a pagar con descuento es de: $" + pagoTotal);

function mostrarTexto(texto) {
  var nuevoParrafo = document.createElement('p');
  nuevoParrafo.innerText = texto;
  nuevoParrafo.className = 'text';
  document.getElementById('output').appendChild(nuevoParrafo);
}
