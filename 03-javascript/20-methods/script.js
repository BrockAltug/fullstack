const constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

// WRITE YOUR CODE BELOW
constellations.push("Canis Major"); // add Canis Major to the end of the constellations array
console.log("using push to add to the beginning of an array without deletion of any other elements: "+constellations); // log the updated constellations array to the console

constellations.unshift("Canis Minor"); // add Canis Minor to the beginning of the constellations array
console.log("using unshift to add to the beginning of an array without deletion of any other elements: " + constellations); // log the updated constellations array to the console

planets.pop(); // remove the last element from the planets array
console.log("using pop to remove the last element of an array: " + planets); // log the updated planets array to the console

const galaxies = constellations.concat(planets); // combine the constellations and planets arrays into a new array called galaxies
console.log("using concat to combine two arrays: " + galaxies); // log the new galaxies array to the console

console.log("using toUpperCase to display a string in all caps: "+star.toUpperCase()); // log the star variable to the console in all uppercase letters