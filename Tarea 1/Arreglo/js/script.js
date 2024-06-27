function generarMatriz(filas, columnas) {
    let matriz = []

    for (let i = 0; i < filas; i++) {
        let fila = []
        for (let j = 0; j < columnas; j++) {
            let nuevoNumero
            do {
                nuevoNumero = generarNumeroAleatorio(filas * columnas * 2)
            } while (fila.includes(nuevoNumero) || matriz.some(row => row.includes(nuevoNumero)))

            fila.push(nuevoNumero)
        }
        matriz.push(fila)
    }

    return matriz
}

function encontrarPosicionMayor(matriz) {
    let mayor = matriz[0][0]
    let posicion = [0, 0]

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > mayor) {
                mayor = matriz[i][j]
                posicion = [i, j]
            }
        }
    }

    return posicion
}

function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max) + 1
}

function generarNuevaMatriz() {
    // Obtener los valores de filas y columnas desde los inputs
    const filas = parseInt(document.getElementById('filas').value)
    const columnas = parseInt(document.getElementById('columnas').value)

    // Validar que los valores sean mayores a 0
    if (filas <= 0 || columnas <= 0) {
        alert('Por favor, ingrese valores mayores a 0 para filas y columnas.')
        return
    }

    // Limpiar la salida anterior
    const matrizContainer = document.getElementById('matrizOutput')
    matrizContainer.innerHTML = ''

    // Actualizar el estilo del contenedor para reflejar el número de filas y columnas
    matrizContainer.style.gridTemplateColumns = `repeat(${columnas}, auto)`
    matrizContainer.style.gridTemplateRows = `repeat(${filas}, auto)`

    // Generar la nueva matriz
    const nuevaMatriz = generarMatriz(filas, columnas)

    // Mostrar la nueva matriz en el documento HTML
    nuevaMatriz.forEach((fila, i) => {
        fila.forEach((numero, j) => {
            const celda = document.createElement('div')
            celda.className = 'celda'
            celda.textContent = numero

            celda.addEventListener('click', () => {
                // Eliminar la clase de destaque de la celda anteriormente destacada
                const celdaAnterior = document.querySelector('.destacar-celda')
                if (celdaAnterior) {
                    celdaAnterior.classList.remove('destacar-celda')
                }

                // Destacar la celda clicada
                celda.classList.add('destacar-celda')
            })

            matrizContainer.appendChild(celda)
        })
    })

    // Mostrar la posición del número mayor de la nueva matriz en el documento HTML
    const nuevaPosicionMayor = encontrarPosicionMayor(nuevaMatriz)
    document.getElementById('resultadoOutput').innerText = `La posición del número mayor (${nuevaMatriz[nuevaPosicionMayor[0]][nuevaPosicionMayor[1]]}) es [${nuevaPosicionMayor[0]}, ${nuevaPosicionMayor[1]}].`
}

// Inicializar la página con la matriz generada por defecto
generarNuevaMatriz()
