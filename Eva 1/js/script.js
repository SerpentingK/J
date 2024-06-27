var inGame = true
var lanzamiento
var juego = true

var apuestaAct = 200
var apuestaJugador
var dinJug1 = 1000
var dinJug2 = 1000
var jugadorActual = 1
var numeroLanza = 0
var ultimoLanza = 0

var span = document.createElement("span")
span.textContent =  apuestaAct
document.getElementById("apuesta").appendChild(span)

document.getElementById("dinJug1").innerText = dinJug1
document.getElementById("dinJug2").innerText = dinJug2
document.getElementById("jugAct").innerText = jugadorActual


function lanzar(){
    if(inGame){
        document.getElementById("numeroDado").innerHTML = ""
        numeroLanza = 0
        juego = true
        apuestaVal = false

        while(juego){
            //Numero aleatorio
            lanzamiento = parseInt((Math.random() * 6) + 1)
                
            var lanz = document.createElement("span")
            lanz.textContent = lanzamiento
            document.getElementById("numeroDado").appendChild(lanz)
            
            //sumar numero de lanzamiento
            numeroLanza++
            //Verificar si el primer lanzamiento es 1 o 6 en el primer lanzamiento
            if(numeroLanza == 1){
                //saber cual fue el ultimo lanzamiento
                ultimoLanza = lanzamiento

                if(lanzamiento == 1 || lanzamiento == 6){
                    apuestaAct += 100
                    //Actualizo contenido apuesta
                    span.textContent =  apuestaAct
                    //Cambio de jugador y perdida de dinero
                    if(jugadorActual == 1){
                        dinJug1 -= 100
                        jugadorActual = 2
                        numeroLanza = 0
                        alert("Sacaste : " + lanzamiento + " \nPierdes $100")
                        juego = false
                    }
                    else if(jugadorActual ==2){
                        jugadorActual = 1
                        dinJug2 -= 100
                        numeroLanza = 0
                        alert("Sacaste : " + lanzamiento + " \nPierdes $100")
                        juego = false
                    }
                }else{
                    
                    while(!apuestaVal){
                        apuestaJugador = parseInt(prompt("El primero no ha sido 6 ni 1! \n Ha sido: "+ lanzamiento + " \n ¿Cuanto deseas apostar?"))
                        if(apuestaJugador > apuestaAct || apuestaJugador <= 0){
                            alert("No puedes apostar eso")
                        }else if(apuestaJugador <= apuestaAct || apuestaJugador > 0){
                            apuestaVal = true
                        }
                    }
                    
                }

            }else if(numeroLanza == 2){
                //Restableecr numero de lanzamiento
                numeroLanza = 0

                if(lanzamiento > ultimoLanza){
                    alert("Ganaste")
                    if(jugadorActual == 1){
                        dinJug1 += apuestaJugador
                        jugadorActual = 2
                        apuestaAct -= apuestaJugador
                    }else if(jugadorActual == 2){
                        dinJug2 += apuestaJugador
                        jugadorActual = 1
                        apuestaAct -= apuestaJugador
                    }
                }else if(lanzamiento <= ultimoLanza){
                    alert("Perdiste")
                    if(jugadorActual == 1){
                        dinJug1 -= apuestaJugador
                        jugadorActual = 2
                        apuestaAct += apuestaJugador
                    }else if(jugadorActual == 2){
                        dinJug2 -= apuestaJugador
                        jugadorActual = 1
                        apuestaAct += apuestaJugador
                    }
                }
                juego = false
            }
        }


        document.getElementById("dinJug1").innerText = dinJug1
        document.getElementById("dinJug2").innerText = dinJug2
        document.getElementById("jugAct").innerText = jugadorActual
        span.textContent =  apuestaAct
    }else{
        alert("Juego terminado, no hay mas dinero")
    }
    if(apuestaAct <= 0){
        inGame = false
    }
    s
    
}

