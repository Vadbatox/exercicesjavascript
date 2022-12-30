let nombre = prompt("Veuillez entre un nombre compris entre 1 et 3");
while (isNaN(nombre)) {
    nombre = prompt("Veuillez entre un nombre compris entre 1 et 3");
}

while (nombre <= 1 || nombre >= 3) {
    nombre = prompt("Veuillez entre un nombre compris entre 1 et 3");
}

alert("Bravo, vous avez trouvé " + nombre + " qui est compris entre 1 et 3")