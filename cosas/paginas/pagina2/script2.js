var pregunta, pase;
pase = false;

do {
    pregunta = prompt("Apodo cariñoso que me dices, (no es Lunesto) ...")
    if (pregunta == "Principe Negro" || pregunta == "Principe negro" || pregunta == "principe negro" || pregunta == "Mi Principe Negro" || pregunta == "mi principe negro" || pregunta == "Mi principe negro") {
        pase = true
    }
    else {
        alert("Respuesta incorrecta, vuelve a intentarlo ...")
        pase = false
    }
} while (pase != true)
