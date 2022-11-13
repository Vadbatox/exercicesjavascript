let nombre = prompt("Entre un nombre :")
while (isNaN(nombre)) {
    nombre = Number(prompt("Entrez un nombre"));
}
let number = nombre
let nombreImpair = []

for (let i = 0; i <= nombre; i++) {

    let reste = number % 2;
    if (reste != 0) {
        nombreImpair.push(number)
    }
    number--;
}

alert("Les différents nombres Impaires à partir de " + nombre + " sont : " + nombreImpair);