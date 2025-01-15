// TODO: What does 'this' refer to?
console.log(this); // Window object in the browser and global object in Node.js environment 

// TODO: What does 'this' refer to?
function helloThis() { // this is a function declaration and not a method of an object so it refers to the global object in the browser and global object in Node.js environment 
   console.log(`Inside this function, this is ${this}`); // Inside this function, this is [object Window] in the browser and [object global] in Node.js environment
}

// TODO: What will this log?
const child = { // this is an object so this refers to the object itself 
   age: 10, // this is a property of the object child so this refers to the object child
   ageTenYears: function() { // this is a method of the object child so this refers to the object child
      console.log(this.age + 10); // this refers to the object child so it will log 20 
   }
};

// TODO: What will this log?
const investor = { // this is an object so this refers to the object itself 
  name: "Cash Saver", // this is a property of the object investor so this refers to the object investor 
  investment: { // this is an object so this refers to the object itself
    initialInvestment: 5000, // this is a property of the object investment so this refers to the object investment 
    investmentGrowth: function() { // this is a method of the object investment so this refers to the object investment
      console.log(this.initialInvestment * 1.15) // this refers to the object investment so it will log 5750 
    }
   }
};

// TODO: After commenting, check your results!
helloThis(); 

// TODO: After commenting, check your results!
child.ageTenYears(); 
investor.investment.investmentGrowth();
