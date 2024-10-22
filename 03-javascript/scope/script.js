// declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
const shout = "Shout";
// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
function justShout() {
  console.log(`${shout}, ${shout}`);
  return;
}

function shoutItAllOut() {
  console.log(`${shout} it all out! `);
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  const animal = "Lions";
  console.log(animal);
  return;
}

function sayTigers() {
  // declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
  let animal = "Tigers";
  console.log(`and ${animal} and `);
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".
const bears = "Bears";

function sayBears() {
    // remove the declaration of the variable 'bears' from the function so it is only declared once
    console.log(`${bears}! OH  MY!`);
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.

function singAlong() {
  const sing = "Sing"; // declare variable 'sing' once in the local scope
  console.log(`${sing},`);
  const singASong = function () {
    console.log(`${sing} a Song.`);
  };
  singASong();
}

singAlong();
