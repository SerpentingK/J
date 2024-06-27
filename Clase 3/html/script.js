var array = []
const input = document.getElementById("cantidad")
var lowerNumber = 1000
var maxNumber = -10
var lowerIndex 
var maxIndex

function generar(){
    var cantidad = parseInt(input.value) 
    if(cantidad<= 0){
        alert("Ingresa un numero valido")
        return
    }
    for (let i = 0; i < cantidad; i++) {
        newNumber = parseInt(Math.random() * 100 + 1)
        array.push(newNumber)
    }
    for (let i = 0; i < array.length; i++) {
        if(lowerNumber > array[i]){
            lowerNumber = array[i]
            lowerIndex = i
        }
        else if(maxNumber < array[i]){
            maxNumber = array[i]
            maxIndex = i
        }
    }
    
    document.getElementById("array").innerText = array
    document.getElementById("maxNumber").innerText = `Numero mayor: ${maxNumber}, indice: ${maxIndex}. `
    document.getElementById("minNumber").innerText = `Numero menor: ${lowerNumber}, indice: ${lowerIndex}. `
}
