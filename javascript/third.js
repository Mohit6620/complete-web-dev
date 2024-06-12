//immediatly invoke function Expression
(function first_IIFE() {
  console.log("iffe means calle fuction  just after its execution ");
})(); //when we write two iffem function at same so we need to use semicolon after first so that its execution stops

((name) => {
  console.log(` iffe using arrow function name of function is ${name} `);
})("Arrow function using iffe");
