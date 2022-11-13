let nombre = (prompt("Entrez un nombre"));
while (isNaN(nombre)) {
    nombre = prompt("Entre un nombre");
}
nombre = parseInt(nombre)

let somme = 0

for (let i = 1; i <= nombre; i++) {
    somme += i
}
alert(somme);