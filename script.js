$(document).ready(onReady);

// State Variables can be declared outside of the onReady
let fungusHP = 100;
let mageAP = 100;

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


function arcaneScepterAttack() {
    console.log('in arcaneScepterAttack');

    // AP cost paid 
    let apCost = attacks.arcaneScepter.apCost;
    // HP damage taken
    let hpDamage = attacks.arcaneScepter.hpDamage;
    
    console.log('Attack Points paid:', apCost);
    console.log('Damage delt:', hpDamage);

}





