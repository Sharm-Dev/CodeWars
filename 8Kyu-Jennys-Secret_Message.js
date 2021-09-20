// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Solution:

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

// Other Solutions:

function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

//Or

function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}

//Or

let greet = (name) => `Hello, ${name == "Johnny" ? "my love" : name}!`;

