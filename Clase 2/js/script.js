var cantidad = parseInt(prompt("Cuantos numero aleatorios quieres"))
var numeroMenor = 100000
var numeroMax = -2
var numeroMaximo = parseInt(prompt("Cual es el numero maximo?"))


document.addEventListener("DOMContentLoaded", function() {

    for (var i = 0; i < cantidad ; i++) {
        var numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        if(numeroAleatorio < numeroMenor){
            numeroMenor = numeroAleatorio
        }
        if(numeroAleatorio > numeroMax){
            numeroMax = numeroAleatorio
        }
        let numero = document.createElement("p")
        numero.textContent = numeroAleatorio
        numero.className = "numero"
        document.getElementById("numbers").appendChild(numero)
    }

    let menor = document.createElement("p")
    menor.textContent = numeroMenor
    menor.className = "numero"
    document.getElementById("numeroMenor").appendChild(menor)
    let max = document.createElement("p")
    max.textContent = numeroMax
    max.className = "numero"
    document.getElementById("numeroMaximo").appendChild(max)
})
