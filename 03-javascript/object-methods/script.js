const chosenPet = "Spot";

const shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

// TODO: Debug the code below
const dogMessage = function () {
  // chosenPet is a variable that holds a value "Lulu"
   console.log(`Congrats! ${chosenPet}, a great dog, is available for adoption!`);
   shelter.apptMessage(); // This is the correct way to access the apptMessage method in the shelter object
}

const catMessage = function () {
  console.log(`Congrats! ${chosenPet}, an awesome cat, is available for adoption!`);
  shelter.apptMessage(); // This is the correct way to access the apptMessage method in the shelter object
}


if (shelter.dogs.includes(chosenPet)) { // This is the correct way to access the array of dogs in the shelter object
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log(`Check out our featured dog, ${shelter.dogs[0]}. or our featured cat, ${shelter.cats[0]}!`); // This is the correct way to access the first element in the dogs and cats arrays in the shelter object
}
