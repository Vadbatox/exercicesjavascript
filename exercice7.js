let nombre = prompt("Veuillez entre un nombre compris entre 10 et 20");

while (nombre <= 10 || nombre >= 20) {
    if (nombre < 10) {
        alert("Plus grand !")
        nombre = prompt("Veuillez entre un nombre compris entre 10 et 20");
    } else if (nombre > 20) {
        alert("Plus petit !")
        nombre = prompt("Veuillez entre un nombre compris entre 20 et 30");
    }

}

alert("Bravo, vous avez trouver " + nombre + " qui est compris entre 10 et 20")