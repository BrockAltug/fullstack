// TODO: What will the following line of code log?

// window is the global object in the browser. It represents the browser window that contains the DOM. The window object is supported by all browsers. It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object. Even the document object (of the HTML DOM) is a property of the window object: window.document.
console.log(window);

// TODO: What will the following line of code log?

// window.document is the DOM document object. It is the root node of the HTML document. The document object is the owner of all other objects in your web page. The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object. The document object has various properties that refer to other objects which allow access to and modification of document content. The document object is the root node of the HTML document. It is the "owner" of all other nodes in the HTML document. The document object provides properties and methods to access all node objects, from within JavaScript. The document object is a property of the window object: window.document.
console.log(window.document);

// TODO: What will the following line of code log?

// document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents). The documentElement property returns the Document Element of the document, as an Element object. The documentElement property will return the <html> element in an HTML document. The documentElement property is read-only. The documentElement property returns the document element of the document, as an Element object. The document element is the root element of the document, and is also the highest-level parent element. The document element is the <html> element. The documentElement property is read-only, but its properties can be changed. The documentElement property is supported in all major browsers. The documentElement property is read-only, but its properties can be changed. The documentElement property is supported in all major browsers.
console.log(document.documentElement);

// TODO: What will the following line of code log?

// document.head returns the <head> element of the current document. The document.head property returns the <head> element of the current document. The document.head property is read-only. The document.head property is supported in all major browsers. The document.head property is read-only, but its properties can be changed. The document.head property is supported in all major browsers.
console.log(document.head);

