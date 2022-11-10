let nombre = parseInt(prompt("Entrez un nombre"));
let controle = nombre + (10);
let number = nombre;
let nombresSuivant = ""

while (number <= controle) {
    number++;
    nombresSuivant += number + ";" + " ";

}

alert("Les 10 nombres suivant " + nombre + " sont : " + nombresSuivant);