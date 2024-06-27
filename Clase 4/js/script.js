const animales = [
    { nombre: "León", imagen: "leon.jpg" },
    { nombre: "Tigre", imagen: "tigre.jpg" },
    { nombre: "Elefante", imagen: "elefante.jpg" },
    { nombre: "Jirafa", imagen: "jirafa.jpg" },
    { nombre: "Cebra", imagen: "cebra.jpg" },
    { nombre: "Oso", imagen: "oso.jpg" },
    { nombre: "Lobo", imagen: "lobo.jpg" },
    { nombre: "Pato", imagen: "pato.jpg" },
    { nombre: "Gorila", imagen: "gorila.jpg" },
    { nombre: "Hipopótamo", imagen: "hipopotamo.jpg" },
    { nombre: "Koala", imagen: "koala.jpg" },
    { nombre: "Pingüino", imagen: "pinguino.jpg" },
    { nombre: "Tiburón", imagen: "tiburon.jpg" },
    { nombre: "Tortuga", imagen: "tortuga.jpg" },
    { nombre: "Jaguar", imagen: "jaguar.jpg" }
]
function Mostrar(){

    const listaAnimales = document.getElementById("tabla");

    listaAnimales.innerHTML = ""

    for (let i = 0; i < animales.length; i++) {
        const li = document.createElement("li")
        li.innerHTML = `Indice ${i}:<br> ${animales[i].nombre}`
        listaAnimales.appendChild(li)
    }
}

function Aleatorio() {
    const resultado = document.getElementById("resultado")
    const indiceAleatorio = Math.floor(Math.random() * animales.length)
    const animalAleatorio = animales[indiceAleatorio]
    resultado.innerHTML = `
                        <h3>${animalAleatorio.nombre}</h3>
                        <img src="img/${animalAleatorio.imagen}" alt="${animalAleatorio.nombre}">
                        `
}
function Posicion() {
    const resultado = document.getElementById("resultado")
    const posicionInput = document.getElementById("posicion")
    const posicion = parseInt(posicionInput.value)

    if (posicion >= 0 && posicion <= animales.length) {
        const animalEnPosicion = animales[posicion]
        resultado.innerHTML = `
                            <h3>${animalEnPosicion.nombre}</h3>
                            <img src="img/${animalEnPosicion.imagen}" alt="${animalEnPosicion.nombre}">
                            `
    } else {
        resultado.innerHTML = "Posición no válida"
    }
}

Mostrar()