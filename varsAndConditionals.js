/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let anakinAttack = 25;
let dookuAttack = 35;

if (anakinAttack > dookuAttack){
    console.log("Anakin has the better attack.");
} else if(anakinAttack < dookuAttack){
    console.log("Count Dooku has the better attack.");
} else if(anakinAttack === dookuAttack){
    console.log("Anakin and Count dooku have the same attack");
}

let anakinHealth = 100;

if (anakinHealth <= 0) {
    console.log("Anakin is dead")
} else {
    // anakinHealth = anakinHealth - dookuAttack;
    anakinHealth -= dookuAttack;
    console.log(`Anakin's health is down to ${anakinHealth}`)
}


if ((anakinHealth + 50) >= 100) {
    anakinHealth = 100;
} else  {
    anakinHealth += 50;
}
console.log(anakinHealth);

let coinLandsHeads = false;

if (coinLandsHeads === true) {
    console.log('The fight continues.');
} else if (coinLandsHeads !== true) {
    console.log('Anakin is now allowed to run away.');
}

// for loops

//  for (let i = 0; i < 5; i++) {
//     if(anakinHealth > 0) { 
//     anakinHealth -= dookuAttack;
//     console.log(`Anakin's health is now ${anakinHealth}.`);
//     }
//     else {
//         console.log("Anakin is dead")
//     }
// }

// while loops
while (anakinHealth > 0) {

    anakinHealth -= dookuAttack
    console.log(`Anakin's health is now ${anakinHealth}`)
}
if (anakinHealth < 0) {
    anakinHealth = 0
    console.log(anakinHealth)
}