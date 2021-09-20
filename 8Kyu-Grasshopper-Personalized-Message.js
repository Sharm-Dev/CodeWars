// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// Solution:

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// Other Solution 

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//Or

function greet(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}

//Or

const greet = (name, owner) => (name == owner ? "Hello boss" : "Hello guest");