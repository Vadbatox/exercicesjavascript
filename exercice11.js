let nombre = (prompt("Entrez un nombre"));
while (isNaN(nombre)) {
    nombre = prompt("Veuillez entrez un nombre :");
}
nombre = parseInt(nombre)

function NombreMultiplie(a) {
    if (a == 0) {
        return 1;
    } else {
        return (a * NombreMultiplie(a - 1));
    }
}

alert(NombreMultiplie(nombre));