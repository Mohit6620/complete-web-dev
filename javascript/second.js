// all about arrays , functions and objects

let one = [1, 2, 3, 4, 5];
one.pop();
one.push(5);
console.log(one);

one.shift(); //removes element from first position
one.unshift(88); //add elements from first position

console.log(one);

console.log(one.includes(5));
console.log(one.indexOf(2));

let string = one.join(); //converting array into object
console.log(typeof one);

let another = [1, 2, 3, 4, 5];
console.log("A", another);
let slice = another.slice(3, 7); //for slicing of an array v; it dose not add last boundry
console.log(slice);
let splice = another.splice(2, 5); // for slicing of an array as it contains boundry elemnts also
console.log(splice);
let four = ["one", "two", "three"];
one.push(another);
console.log(one); //we can add any element of into an array
let third = four.concat(another);
console.log(third); //concating two array propery

let final = [...another, ...one, ...third]; //it breaks all the array and make their element  in a single row // also called spread operator
console.log(final);

console.log(Array.isArray(one)); //gives boolean value
console.log(Array.from("mohit")); //creating array from string
