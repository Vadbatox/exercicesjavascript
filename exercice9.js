let nombre = (prompt("Entrez un nombre"));
while (isNaN(nombre)) {
    nombre = prompt("Entre un nombre");
}
nombre = parseInt(nombre)
const nombrefixe = nombre;
let table = "";

for (let i = 1; i <= 10; i++) {
    nombre = nombrefixe * i;
    table += " ; " + (nombrefixe + " x " + i + " = " + nombre);
}

alert("Table de " + nombre + " : " + table);