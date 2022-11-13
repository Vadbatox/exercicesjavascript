let nombre = (prompt("Entrez un nombre"));
while (isNaN(nombre)) {
    nombre = prompt("Entrez un nombre ");
}
nombre = parseInt(nombre)
let controle = nombre + (10);
let number = nombre;
let nombresSuivant = []

while (number < controle) {
    number++;
    nombresSuivant.push(number)

}

alert("Les 10 nombres suivant " + nombre + " sont : " + nombresSuivant);