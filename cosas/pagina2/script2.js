var pregunta, pase;
pase = false;

do {
    pregunta = prompt("Apodo cariñoso que me dices, (no es Lunesto) ...").toUpperCase()
    if (pregunta == "PRINCIPE NEGRO" || pregunta == "CABALLERO OBSCURO" || pregunta == "CABALLERO OSCURO" ) {
        pase = true
    }
    else {
        alert("Respuesta incorrecta, vuelve a intentarlo ...")
        pase = false
    }
} while (pase != true)
