let Nombres = [];
let i = 1;

Nombres.push(prompt("Entrez le nombre numero " + i + " :"))

while (Nombres.slice(-1) != 0) {
    i++
    Nombres.push(prompt("Entrez le nombre numero " + i + " :"))

}

Nombres.pop()

let plusGrandNombre = Math.max.apply(null, Nombres);

alert("Le plus grand nombre est : " + plusGrandNombre);

let a = 0;
while (plusGrandNombre != Nombres[a]) {
    a++;
}
alert("C’était le nombre numéro " + (parseInt(a) + 1));