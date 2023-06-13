$(document).ready(onReady);

// State Variables can be declared outside of the onReady
let fungusTotalHP = 100;
let mageTotalAP = 100;

let attacks = {
    arcaneScepter: {apCost: 12, hpDamage: 14},
    entangle: {apCost: 23, hpDamage: 9},
    dragonBlade: {apCost: 38, hpDamage: 47},
    starFire: {apCost: 33, hpDamage: 25}
}




function onReady() {
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // Attack Buttons
    $('.arcane-scepter').on('click', arcaneScepterAttack);
    // $('.entangle').on('click', entangleAttack);
    // $('.dragon-blade').on('click', dragonBladeAttack);
    // $('.star-fire').on('click', starFireAttack);

}

// Event Managers for Attack Buttons
function arcaneScepterAttack() {
    console.log('in arcaneScepterAttack');

    // AP cost paid 
    let apCost = attacks.arcaneScepter.apCost;
    // HP damage taken
    let hpDamage = attacks.arcaneScepter.hpDamage;

    console.log('Attack Points paid:', apCost);
    console.log('Damage dealt:', hpDamage);

    // Update AP & HP
    fungusTotalHP -= hpDamage;
    mageTotalAP -= apCost;

    // send to conditions and DOM render
    fungusStatus(fungusTotalHP)
    attackStatus(mageTotalAP)

}
function entangleAttack() {}
function dragonBladeAttack() {}
function starFireAttack() {}

// Update AP & HP states

function fungusStatus() {
    // Update HP fungusTotalHP

    // If <= 0, == 0
    // If == 0, walk => dead
    // => change text (new function?)
    // => change progress amount
}

function attackStatus() {
    // Update HP fungusTotalHP
    // If <= 0, == 0
    // If AP == 0, walk => jump && buttons disabled
    // => change text (new function?)
    // => change progress amount
}



