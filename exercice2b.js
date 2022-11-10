let nombre = prompt("Entrez un nombre");
let number = nombre
let nombreImpair = ""
for (let i = 0; i <= nombre; i++) {

    let reste = number % 2;
    if (reste != 0) {
        nombreImpair += number + ";" + " ";
    }

    number--;

}

alert("Les différents nombres impaires à partir de " + nombre + " sont : " + nombreImpair);