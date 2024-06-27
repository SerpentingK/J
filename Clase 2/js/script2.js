var a = parseInt(prompt("Qué número deseas invertir?"));
document.addEventListener("DOMContentLoaded", function() {
    var nuevoNumero = 0;
    var numeroOriginal = a;
    
    for (; a > 0; a = Math.floor(a / 10)) {
        var digito = a % 10;
        nuevoNumero = nuevoNumero * 10 + digito;
    }

    var texto = document.createElement("p");
    texto.textContent = numeroOriginal;
    document.getElementById("article2").appendChild(texto);

    var texto2 = document.createElement("p");
    texto2.textContent = nuevoNumero;
    document.getElementById("article").appendChild(texto2);
});



