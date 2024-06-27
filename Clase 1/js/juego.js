var encendido = true
var eleccion = 0
var bot = 0
var seguirJugando = 0
while (encendido){
    eleccion = parseInt(prompt("Escriba una opcion: \n 1: Piedra \n 2: Papel \n 3:Tijera"))
    bot = random(1,4)

    switch (eleccion){
        case 1:
            if(bot == 1){
                window.alert("Mi eleccion es: Piedra, ¡Empate!")
            }
            else if(bot == 2){
                window.alert("Mi eleccion es: Papel, Perdiste")
            }
            else if(bot == 3){
                window.alert("Mi eleccion es: Tijera, Perdi :(")
            }
            break
        case 2:
            if(bot == 1){
                window.alert("Mi eleccion es: Piedra, Perdi :(")
            }
            else if(bot == 2){
                window.alert("Mi eleccion es: Papel, ¡Empate!")
            }
            else if(bot == 3){
                window.alert("Mi eleccion es: Tijera, Perdiste")
            }
            break
        case 3:
            if(bot == 1){
                window.alert("Mi eleccion es: Piedra, Perdiste")
            }
            else if(bot == 2){
                window.alert("Mi eleccion es: Papel, Perdi :(")
            }
            else if(bot == 3){
                window.alert("Mi eleccion es: Tijera, ¡Empate!")
            }
            break
        default:
            window.alert("Has ingreado una opcion incorrecta")
            break

    }
    f = true
    while(f){
        seguirJugando = parseInt(prompt("Deseas seguir jugando? \n 1: Si \n 2:No"))
        switch (seguirJugando){
            case 1:
                f = false
                break
            case 2:
                f = false
                encendido = false
                break
            default:
                window.alert("Has ingresado una opcion incorrecta")
                break
        }
    }
}
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}