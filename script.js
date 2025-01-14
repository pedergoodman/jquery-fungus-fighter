$(document).ready(onReady);

// State Variables can be declared outside of the onReady
let hpTotal = 100;
let apTotal = 100;

let attacks = {
  arcaneScepter: { apCost: 12, hpDamage: 14 },
  entangle: { apCost: 23, hpDamage: 9 },
  dragonBlade: { apCost: 38, hpDamage: 47 },
  starFire: { apCost: 33, hpDamage: 25 },
};

function onReady() {
  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM

  // Attack Buttons
  $(".arcane-scepter").on("click", arcaneScepterAttack);
  $(".entangle").on("click", entangleAttack);
  $(".dragon-blade").on("click", dragonBladeAttack);
  $(".star-fire").on("click", starFireAttack);
}

// Event Managers for Attack Buttons
function arcaneScepterAttack() {
  console.log("arcaneScepterAttack");

  // AP cost paid
  let apCost = attacks.arcaneScepter.apCost;
  // HP damage taken
  let hpDamage = attacks.arcaneScepter.hpDamage;

  console.log("AP Cost:", apCost);
  console.log("Damage:", hpDamage);

  // send to conditions and DOM render
  attackStatus(apCost);
  fungusStatus(hpDamage);
}

function entangleAttack() {
  console.log("entangleAttack");

  // AP cost paid
  let apCost = attacks.entangle.apCost;
  // HP damage taken
  let hpDamage = attacks.entangle.hpDamage;

  console.log("AP Cost:", apCost);
  console.log("Damage:", hpDamage);

  // send to conditions and DOM render
  attackStatus(apCost);
  fungusStatus(hpDamage);
}

function dragonBladeAttack() {
  console.log("dragonBladeAttack");

  // AP cost paid
  let apCost = attacks.dragonBlade.apCost;
  // HP damage taken
  let hpDamage = attacks.dragonBlade.hpDamage;

  console.log("AP Cost:", apCost);
  console.log("Damage:", hpDamage);

  // send to conditions and DOM render
  attackStatus(apCost);
  fungusStatus(hpDamage);
}

function starFireAttack() {
  console.log("starFireAttack");

  // AP cost paid
  let apCost = attacks.starFire.apCost;
  // HP damage taken
  let hpDamage = attacks.starFire.hpDamage;

  console.log("AP Cost:", apCost);
  console.log("Damage:", hpDamage);

  // send to conditions and DOM render
  attackStatus(apCost);
  fungusStatus(hpDamage);
}

// Update AP & HP states
function fungusStatus(hpDamage) {
  // console.log('in fungusStatus:', hpDamage);

  // Update HP hpTotal
  hpTotal -= hpDamage;
  // check if less than 0
  if (hpTotal < 0) {
    hpTotal = 0;
    // Change state: walk => dead
    $(".freaky-fungus").removeClass("walk");
    $(".freaky-fungus").addClass("dead");
  }
  console.log("HP total:", hpTotal);

  // Change text on DOM)
  $(".hp-text").text(`${hpTotal} HP`);
  // Change progress amount
  $("#hp-meter").val(hpTotal);

  if (hpTotal < 50) {
    setInterval(mushroomRegeneration, 1000);
    // mushroomRegeneration();
  }
}

function attackStatus(apCost) {
  // console.log('in attackStatus:', apCost);

  // Update HP apTotal
  apTotal -= apCost;
  // check if less than 0
  if (apTotal < 0) {
    apTotal = 0;
    // Change state walk => jump
    $(".freaky-fungus").removeClass("walk");
    $(".freaky-fungus").addClass("jump");
    // ADD Change state buttons disabled
    $(".attack-btn").attr("disabled", "");
  }

  console.log("AP total:", apTotal);
  // Change text on DOM)
  $(".ap-text").text(`${apTotal} AP`);
  // Change progress amount
  $("#ap-meter").val(apTotal);
}

function mushroomRegeneration() {
  if (hpTotal < 50) {
    hpTotal++;
    console.log("New:", hpTotal);
    // Change text on DOM)
    $(".hp-text").text(`${hpTotal} HP`);
    // Change progress amount
    $("#hp-meter").val(hpTotal);
    // setInterval(countup, 1000)
  } else {
    clearInterval();
  }
}
