let nombre = parseInt(prompt("Entrez un nombre"));
let nombreMultiplie = 1
let factorielle = 1
while (nombreMultiplie <= nombre) {
    factorielle *= nombreMultiplie
    nombreMultiplie++
}
alert(factorielle);