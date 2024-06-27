var frutas =["Banano","Manzana", "Fresa", "Pera"]

var tabla = document.getElementById("tabla")
const input = document.getElementById("fruta")
const contador = document.getElementById("numeroDeFrutas")
Actualizar()

function Actualizar(){
    tabla.innerHTML = ""
    tabla.innerHTML = ` <tr>
                            <th>Cod</th>
                            <th>Frutas</th>
                        </tr>`
    for(let i = 0; i < frutas.length; i++){
        nuevaFruta = frutas[i]
        tabla.innerHTML +=  `<tr>
                                <td>${i}</td>
                                <td>${nuevaFruta}</td>
                            </tr>`
        x = i + 1
    }
}

function Agregar(){
    if(input.value == ""){
        return
    }
    nuevaFruta = input.value
    input.value = ""
    frutas.push(nuevaFruta)
    Actualizar()
}

function Contar(){
    contador.innerText = frutas.length

}

const numCambio = document.getElementById("numCambio")
const valCambio = document.getElementById("valCambio")
function Cambio() {
    frutas[numCambio.value] = valCambio.value
    Actualizar()
    numCambio.value = ""
    valCambio.value = ""
}