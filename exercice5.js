alert("Soit l'équation Ax²+Bx+C=0, entrez les valeurs de A, B et C pour trouver la solution");
let a = prompt("Entrez la valeur de A");
let b = prompt("Entrez la valeur de B");
let c = prompt("Entrez la valeur de C");
let delta = Math.pow(b, 2) - 4 * a * c;

if (delta > 0) {
    let solution1 = (-b - Math.sqrt(delta)) / (2 * a);
    let solution2 = (-b + Math.sqrt(delta)) / (2 * a);

    alert("Les solutions de l'équation " + a + "x²+" + b + "x+" + c + "=0 sont : " + solution1 + " et " + solution2)
} else if (delta == 0) {
    let solution = -b / (2 * a)
    alert("La solution de l'équation " + a + "x²+" + b + "x+" + c + "=0 est : " + solution);
} else {
    alert("l'équation " + a + "x²+" + b + "x+" + c + "=0 n'a pas des solutions")
}