"use strict";

console.log("JS task 1");

// Įkelkite tik javascript failo turinį

// 1. Turite kintamaji kuriame saugoma temperatura Farenheitu
let tempF = 69; //Temperatura gali keistis, kodas turetu veikti visada
// parasykite koda kuris sukonvertuotu temperatura i Celsiju
// Atsakymas matomas console: 20.5555555555555555

// T(°C) = (T(°F) - 32) × 5/9
let tempC = (tempF - 32) * 5 / 9;
console.log(tempC);

// 1.1 Apribokite, kad rodytu tik 1 skaiciu po kablelio
// Atsakymas matomas console: 20.6
// BONUS - padarykite, kad neapvalintu. Atsakymas matomas console: 20.5

let tempCSuapvalinta = tempC.toFixed(1);
console.log(tempCSuapvalinta);

//BONUS 1

// 1. 20.55555 * 10 = 205.555555555
// 2. parseInt 205.55555 = 205
// 3. 205 / 10 = 20.5

let bonus1 = parseInt(tempC * 10, 10) / 10;
console.log("Bonus1: " + bonus1);

// BONUS 2
// 1. 20.55555 * 10 = 205.555555555
// 2. Math.floor() 205.55555 = 205
// 3. 205 / 10 = 20.5

let bonus2 = Math.floor(tempC * 10) / 10;
console.log("Bonus2: " + bonus2);

// BONUS 3
// tempC = 21;
let tempCText = tempC.toFixed(2);
//let tempCText = tempC + ""; //tas pats kaip  toString()
console.log(tempCText);

let taskoPozicija = tempCText.indexOf('.');
// 20.55555555
// 01234
console.log(taskoPozicija);

let bonus3 = tempCText.substring(0, taskoPozicija + 2);
bonus3 = parseFloat(bonus3);
//bonus3 = bonus3 * 1; //Konvertuoja i skaiciu
console.log("Bonus3: " + bonus3);


// 1.2  Turite kintamaji su tekstu:
let text1 = "Lietuvoje šiuo metu laipsniai pagal Celsijų";
// Naudojant replace suformuokite sakini, kuriame bus iterpta temperatura
// Atsakymas matomas console: Lietuvoje šiuo metu 20.6 laipsniai pagal Celsijų

let suReplace = text1.replace('laipsniai', bonus3 + " laipsniai" );
console.log(suReplace);

// 1.3  Turite kintamaji su tekstu:
let text2 = "Lietuvoje šiuo metu laipsniai pagal Celsijų";
// Naudojant substring suformuokite sakini, kuriame bus iterpta temperatura
// Atsakymas matomas console: Lietuvoje šiuo metu 20.6 laipsniai pagal Celsijų
// "Lietuvoje šiuo metu laipsniai pagal Celsijų"
//  012345678901234567890

let pradzia = text2.substring(0, 20);
console.log(pradzia);
let pabaiga = text2.substring(19);
console.log(pabaiga);

console.log(pradzia + bonus3 + pabaiga);

// 2. Gauti tik skaicius kurie eina po kablelio
//	  Nepamirstame, kad skaicius gali pasikeisti
//	  Isvedime nurodome kiek skaiciu yra po kablelio
//      ir kokie tie skaiciai
//      *gaunamas visada skaicius pas kuri yra skaiciai po kablelio

let skaicius = 12.235346547;

// Rezultatas console:
// Skaiciu po kablelio: 9, jie yra: 235346547

// 12.235346547
// 012345678

let skaiciusText = skaicius.toString();
console.log(skaiciusText);
taskoPozicija = skaiciusText.indexOf('.');
console.log(taskoPozicija);
let skaiciaiPoKablelio = skaiciusText.substring(taskoPozicija + 1);
console.log(skaiciaiPoKablelio);

console.log("Skaiciu po kablelio: "+skaiciaiPoKablelio.length+", jie yra: "+skaiciaiPoKablelio);


// let poKablelio = skaicius.toString().substring(skaicius.toString().indexOf('.') + 1);
// console.log(poKablelio);


