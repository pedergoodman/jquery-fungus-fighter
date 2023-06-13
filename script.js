$(document).ready(onReady);

// State Variables can be declared outside of the onReady
let fungusHP = 100;
let mageAP = 100;
let Attacks = [
    { arcaneScepter: {apCost: 12, hpDamage: 14} },

    { entangle: {apCost: 23, hpDamage: 9} },
    
    { dragonBlade: {apCost: 38, hpDamage: 47} },
    
    { starFire: {apCost: 33, hpDamage: 25} }       
]



function onReady() {
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    $('.arcane-scepter').on('click', arcaneScepterAttack)

}


function arcaneScepterAttack() {
    console.log('in arcaneScepterAttack');
    

}





