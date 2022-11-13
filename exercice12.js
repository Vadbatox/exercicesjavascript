let nombres = [];

for (let i = 1; i <= 20; i++) {
    let nombre = prompt("Entre le nombre numero  :" + i)
    while (isNaN(nombre) || nombre == 0 || nombres.includes(nombre) == true) {
        nombre = prompt("Entre le nombre numero  :" + i)
    }
    nombres.push(nombre)
}

let plusGrandNombre = Math.max.apply(null, nombres);

alert("Le plus grand nombre est : " + plusGrandNombre);

let a = 0;
while (plusGrandNombre != nombres[a]) {
    a++;
}
alert("C’était le nombre numéro " + (parseInt(a) + 1));