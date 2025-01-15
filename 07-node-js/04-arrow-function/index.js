// 1. funnyCase makes each letter in a string the opposite case as the one before
const funnyCase = string => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }
  return newString;
};

// Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
const map = (arr, cb) => {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = map(numbers, element => {
  return element * 2
});

// Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
console.log(doubled);

// --------------------------------------------------------------------------

// 3. filter lets you loop over an array and remove elements
const filter = (arr, cb) => {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

const evenNumbers = filter(numbers, currentElement => {
  return currentElement % 2 === 0
});

// Prints `[ 2, 4, 6, 8, 10 ]`
console.log(evenNumbers);

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your netflix queue
const netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club"
  ],

  // Changed to a regular function so that 'this' properly refers to the 'netflixQueue' object.
  watchMovie: function() { 
    // 'this.queue' now correctly refers to the 'queue' array within 'netflixQueue'.
    this.queue.pop(); 
    return "Watched a movie!";
  },

  // Changed to a regular function for the same reason: to correctly bind 'this'.
  addMovie: function(movie) { 
    // 'this.queue' correctly refers to the 'queue' array, and a movie is added to the front.
    this.queue.unshift(movie);
    return "Adding a movie!";
  },

  // Changed to a regular function to bind 'this' to the 'netflixQueue' object.
  printQueue: function() { 
    let list = "";
    
    // 'this.queue' now refers to the 'queue' array.
    for (let i = this.queue.length - 1; i >= 0; i--) {
      const currentMovie = this.queue[i];
      // Create a list of movies from the queue, where each movie is displayed with a number.
      list += (this.queue.length - i) + ". " + currentMovie + "\n";
    }
    return list;
  }
};

// Testing the netflixQueue object methods and printing results

// Print the current movie queue.
console.log(`
Printing movie queue!

${netflixQueue.printQueue()}
`);

// Watch a movie, which removes the last movie in the queue.
console.log(`
${netflixQueue.watchMovie()}
`);

// Print the movie queue again after watching a movie.
console.log(`
Printing movie queue!

${netflixQueue.printQueue()}
`);

// Add a new movie to the queue.
console.log(`
${netflixQueue.addMovie('Black Swan')}
`);

// Print the final movie queue after adding a new movie.
console.log(`
Printing movie queue!

${netflixQueue.printQueue()}
`);
