// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'
const { name, type } = nodejs; // Destructuring 'name' and 'type' from the 'nodejs' object

console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// TODO: Destructure the nested object 'js'
const {
  tools: {
    frameworks: { framework1, framework2 }, // Destructuring 'framework1' and 'framework2' from 'tools.frameworks'
  },
} = js;

//another way to write it
//const { framework1, framework2 } = js.tools.frameworks; // Destructuring 'framework1' and 'framework2' from 'js.tools.frameworks'

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: Destructure the array 'languages'
const [markup, style, scripting] = languages; // Destructuring the 'languages' array into 'markup', 'style', and 'scripting'

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML