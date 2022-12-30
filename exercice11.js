let nombre = (prompt("Entrez un nombre"));
while (isNaN(nombre)) {
    nombre = prompt("Veuillez entrez un nombre :");
}
nombre = parseInt(nombre)

function nombreMultiplie(a) {
    if (a == 0) {
        return 1;
    } else {
        return (a * nombreMultiplie(a - 1));
    }
}

alert(nombreMultiplie(nombre));