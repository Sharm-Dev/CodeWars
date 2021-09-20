// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Solution:

function repeatStr(n, s) {
  return s.repeat(n);
}

// Other Solution:

repeatStr = (n, s) => s.repeat(n);

//Or 

function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++) str += s;
  return str;
}

