let Nombres = [];

for (let i = 1; i <= 20; i++) {
    Nombres.push(prompt("Entrez le nombre numero " + i + " :"))
}

plusGrandNombre = Math.max.apply(null, Nombres);

alert("Le plus grand nombre est : " + plusGrandNombre);

let a = 0;
while (plusGrandNombre != Nombres[a]) {
    a++;
}
alert("C’était le nombre numéro " + (parseInt(a) + 1));