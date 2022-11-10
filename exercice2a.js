let nombre = prompt("Entrez un nombre");
let number = nombre
let nombrepair = ""
for (let i = 0; i <= nombre; i++) {

    let reste = number % 2;
    if (reste == 0) {
        nombrepair += number + ";" + " ";
    }

    number--;

}

alert("Les différents nombres paires à partir de " + nombre + " sont : " + nombrepair);