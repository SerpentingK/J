var vocales =[
    {vocal: "a", nombre1:"Arbol", elemento1:"arbol.jpg", nombre2:"Avion", elemento2:"avion.jpg",nombre3:"Ardilla", elemento3: "ardilla.jpg"},
    {vocal: "e", nombre1:"Elefante", elemento1:"elefante.jpg", nombre2:"Esfero", elemento2:"esfero.jpg", nombre3:"Estrella",elemento3: "estrella.jpg"},
    {vocal: "i", nombre1:"Iglesia", elemento1:"iglesia.jpg", nombre2:"Iguana", elemento2:"iguana.jpg",nombre3:"Ibai", elemento3: "ibai.jpg"},
    {vocal: "o", nombre1:"Oso", elemento1:"oso.jpg", nombre2:"Ojo", elemento2:"ojo.jpg", nombre3:"Orquesta", elemento3: "orquesta.jpg"},
    {vocal: "u", nombre1:"Umbreon", elemento1:"umbreon.jpg", nombre2:"Uñas", elemento2:"uña.jpg",nombre3:"Urano", elemento3: "urano.jpg"},
]

var valida 
function Confirmacion(vocal){
    for (let i = 0; i < vocales.length; i++) {
        if(vocal == vocales[i].vocal){
            valida = true
            break
        }else{
            valida = false
        }
    }
}
function Mostrar(){
    const input = document.getElementById("input")
    vocalUsuario = input.value
    vocalUsuario = vocalUsuario.toLowerCase()
    Confirmacion(vocalUsuario)
    const contenedorResultado = document.getElementById("resultados")
    contenedorResultado.innerHTML = ""
    if(valida){
        
        for(let i = 0; i < vocales.length; i++){
            if(vocales[i].vocal == vocalUsuario){
                for(let j = 1; j <= 3; j++){
                    const contenedor = document.createElement("div")
                    contenedor.style.display = "flex"
                    contenedor.style.flexDirection = "column"
                    contenedor.style.alignItems= "center"
                    contenedor.style.width = "25%"
                    contenedor.style.backgroundColor = "#0057a5"
                    contenedor.style.borderRadius = "10px"
                    const name = document.createElement("h3")
                    name.innerText =`${vocales[i]["nombre" + j]}`
                    const imagen = document.createElement("img")
                    imagen.src = `img/${vocales[i]["elemento" + j]}`
                    contenedor.appendChild(name)
                    contenedor.appendChild(imagen)
                    contenedorResultado.appendChild(contenedor)
                }
                break
            }
        }
    }else{
        contenedorResultado.innerHTML = `<h2> No es valido como una vocal</h2>
        ` 
    }
}
