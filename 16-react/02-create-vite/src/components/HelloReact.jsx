// TODO: Add a comment explaining what a react component is
// A React component is a reusable, self-contained piece of UI logic that 
// defines how a section of the user interface should look and behave. 
// It can be either a function or a class.

function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension for JavaScript that allows you to write HTML-like code 
  // within JavaScript. The curly braces in JSX are used to embed JavaScript expressions 
  // within the HTML-like structure, allowing for dynamic content.
  return <h2>Hello World! Here is {text}</h2>;
}

export default HelloReact;