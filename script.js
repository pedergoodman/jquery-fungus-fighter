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

    // send to conditions and DOM render
    attackStatus(apCost)
    fungusStatus(hpDamage)

}
function entangleAttack() {}
function dragonBladeAttack() {}
function starFireAttack() {}

// Update AP & HP states

function fungusStatus(hpDamage) {
    console.log('in fungusStatus:', hpDamage);

    // Update HP fungusTotalHP
    fungusTotalHP -= hpDamage;
    // check if less than 0
    if (fungusTotalHP < 0) {
        fungusTotalHP = 0;
        // ADD Change state: walk => dead

    }
    console.log('HP total:', fungusTotalHP);
    
    // Change text on DOM)
    let test = $('.hp-text').text(`${fungusTotalHP} HP`)
    // Change progress amount
    $('#hp-meter').val(fungusTotalHP);
}

function attackStatus(apCost) {
    console.log('in attackStatus:', apCost);

    // Update HP mageTotalAP
    mageTotalAP -= apCost;
    // check if less than 0
    if (mageTotalAP < 0) {
        mageTotalAP = 0;
        // ADD Change state walk => jump
        // ADD Change state buttons disabled
    }
    console.log('AP total:', mageTotalAP);
    // Change text on DOM)
    $('.ap-text').text(`${mageTotalAP} AP`)
    // Change progress amount
    $('#ap-meter').val(mageTotalAP)
}



// check if hp == 0, if so it's dead, 
// else check if AP = 0, if so it's dead
// else they're both alive