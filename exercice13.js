let nombres = [];
let i = 1;
let nombre;

while (isNaN(nombre)) {
    nombre = Number(prompt("Entre le nombre numero  :" + i))
    nombres.push(nombre)
}

while (nombres.slice(-1) != 0) {
    i++
    nombre = Number(prompt("Entre le nombre numero  :" + i))
    while (isNaN(nombre) || nombres.includes(nombre) == true) {
        nombre = Number(prompt("Entre le nombre numero  :" + i))
    }
    nombres.push(nombre)

}

nombres.pop()

let plusGrandNombre = Number(Math.max.apply(null, nombres));

alert("Le plus grand nombre est : " + plusGrandNombre);

let a = 0;
while (plusGrandNombre != nombres[a]) {
    a++;
}
alert("C’était le nombre numéro " + (parseInt(a) + 1));