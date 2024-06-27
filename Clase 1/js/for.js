var mult = parseInt(prompt("Ingrese que numero quiere obtener los multiplos"))
var num = parseInt(prompt("Ingrese un  numero y se imprimiran lo multiplos de "+ mult + " que hayan por debajo de ese numero"))
let contador = 0

document.addEventListener("DOMContentLoaded", function() {
    var titulo = document.createElement("h2")
    titulo.textContent = "Los numeros que son multiplos de " + mult + " menores que "+ num + " son:"
    document.getElementById("title").appendChild(titulo)
    for (var i = num; i >= 1; i -= 1) {
        if(i % mult == 0){
            const nuevoParrafo = document.createElement("p");
            nuevoParrafo.textContent = i;
            nuevoParrafo.className = 'text';
            document.getElementById("numbers").appendChild(nuevoParrafo);
            contador++
        }
        
    }
    var conteo = document.createElement("h2")
    conteo.textContent = "Hay un total de " + contador + " multiplos de " + mult
    document.getElementById("title").appendChild(conteo)
});
