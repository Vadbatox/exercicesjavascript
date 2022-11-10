let annee = prompt("Entrez une année");
let divisibleQuatre = annee % 4;
let divisibleCent = annee % 100;
let divisibleQuatreCent = annee % 400;

if (divisibleQuatre == 0 && divisibleCent != 0) {
    alert("OUI c'est une année bissextile");
} else if (divisibleQuatreCent == 0) {
    alert("OUI, c'est une année bissextile");
} else {
    alert("NON, ce n'est pas une année bissextile");
}