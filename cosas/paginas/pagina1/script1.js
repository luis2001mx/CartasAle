var contraseña, pase;
pase = false;

do {
    contraseña = prompt("¿Cual es la contraseña? ...")
    if (contraseña == "08/12/2016" || contraseña == "8/12/2016" || contraseña == "08/12/16" || contraseña == "8/12/16") {
        pase = true
    }
    else {
        alert("Contraseña incorrecta, vuelve a intentarlo ...")
        pase = false
    }
} while (pase != true)
