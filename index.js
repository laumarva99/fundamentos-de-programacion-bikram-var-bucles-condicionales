
//1.

let variableSinValor;

console.log(variableSinValor);

//2.

let booleano1 = true;
let booleano2 = false;

console.log(booleano1, booleano2);

//3.

const PI = 3.14;

console.log(PI);

//4.

const TAU = 2 * PI;

console.log(TAU);

//5.

const booleanoAnd = booleano1 && booleano2;

console.log(booleanoAnd);

//6.

const booleanoNot = !booleano1;

console.log(booleanoNot);

//7.

const booleanoMix0 = (booleano1 || booleano2) &&
    (booleano1 || (!booleano1 && !booleano2));

console.log(booleanoMix0);

//8.

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

console.log(resultadoDesp, incrementarDesp);

//9.

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

console.log(resultadoAntes, incrementarAntes);

//10.

let contarHasta10_2 = 0;

for (let i = 0; contarHasta10_2 !== 10; i++) {
    contarHasta10_2++;

    console.log("i:", i);
    console.log("Contador:", contarHasta10_2);
}

console.log("Resultado final:", contarHasta10_2);

//11.

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI += postJ++; console.log(postI)
}

//12.
let sumaPares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}
console.log("Suma de números pares:", sumaPares);

//13.

let variableValorNumerico = 5;

console.log(variableValorNumerico);

//14.

const MiNombre = "Laura";

//15.

const MiNumeroFav = 19;

//16.

const booleanoOr = booleano1 || booleano2;

console.log(booleanoOr);

//17.

const booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico >= MiNumeroFav);

console.log(booleanoMix1);

//18.

const seisNoEsNueve = 6 !== 9;

console.log(seisNoEsNueve);

//19.

const booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU));

console.log(booleanoMix2);

//20.

const valorSuma = MiNumeroFav + variableValorNumerico;

console.log(valorSuma);

//21.

const valorResta = MiNumeroFav - variableValorNumerico;

console.log(valorResta);

//22.

const valorMultiplicación = MiNumeroFav * variableValorNumerico;

console.log(valorMultiplicación);

//23.

const valorDivisión = MiNumeroFav / 3;

console.log(valorDivisión);

//24.

let contarHasta10 = 0;

while (contarHasta10 < 10) {
    contarHasta10++;
}

console.log(contarHasta10);

//25.
let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
    preI += ++preJ;
}

console.log(preI);
console.log(preJ);

//26.

let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}
console.log(sumaImpares);