const a = "50";
const b = 50;
const c = 100;
const d = c % b;
const e = c / 2;

const expression1 = (b === e); //true
const expression2 = (e < d); //false

// Use comparison operators so all expressions below log to the console as true
console.log(a !== b); //changed === to !==
console.log(b === e); //changed !== to ===
console.log(c > b); // changed less than < to greater than >
console.log(d === 0); // changed greater than > to ===

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2); // changed && to ||
console.log( expression1 && !expression2); // changed || to && removed ! from expression1 and added ! to expression2 
  
