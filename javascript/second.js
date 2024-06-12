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

// ***********************************************************************************************************************************************
//here is info about the object
// new type symbol
//const grades=symbol("pass")
const student = {
  id: 1,
  name: "mohit",
  value: "oky",
  //[grades]:"pass"  //using symbol in any object
};
//Object.freeze(student)//now we cant change the value present in object
//console.log(student.id)
student.id = 5;
console.log(student); // here id is not chnaged to 5 from 1

student.greeting = function () {
  console.log(`this is using function name is ${this.name}`); //by using this we can access the members of object into function
};
console.log(student.greeting());
student.greeting();

const fix = new Object(); //creating an object with using singleton
fix.id = 5;
console.log(`name is ${fix.id}`);

fix.one = function () {
  c = this.id; //using this keyword we can access the value from  the  object in the function
  console.log(c);
};
fix.one();
const add_obj = Object.assign(student, fix); //merge two or more object
const ano_obj = { ...student, ...fix }; //another way called spread operators
console.log("this is merge object", add_obj);

console.log(Object.keys(student)); //assign all the keys
console.log(Object.values(fix)); //assign all the values
console.log(student.hasOwnProperty("greeting")); //checks if that property is available or not

////////destructuring object
// we print object like this in simple way
console.log(student.name);
//now we use destructure method
const { name: N } = student;
//now for the printing of name we just need to print N
console.log("name of student is", N)

//*********************************************************************************************************************************************** */
//functions
function login(username) {
  if (!username) {
    console.log("please enter valid user name ");
  } else {
    console.log(`welcome dear ${username} to the game`);
  }
}

login("mohit"); //calling function with the parameters
login();

//taking multiple values in one function
function calculate_price(...num1) {
  //this calledd rest operators it returns value in array form
  console.log("values passed in given function are", num1);
}
calculate_price(10, 0, 30, 50, 88);

//calling object in the function
const user_details = {
  id: 1,
  name: "mohit",
  task: "cloud",
};
function handle_user(anyuser) {
  console.log(
    `hello ${anyuser.name} your  is ${anyuser.id} and your task is ${anyuser.task}`
  );
}
handle_user(user_details);
handle_user({
  id: 2,
  name: "harsh",
  task: "node",
}); //direclty creating an object in parrameter withouth creatting in other place
//as like this we can passed Arrays inside the function and handletheir numerous methods


//accesing function inside object 

const data ={
  id:1,
  position:"x",
  func:function data_display(one){
      console.log(`here we are know about the data `)
  }
}
console.log(data.func()) //calling function inside the object

//arrow function 
const arrow = (one,two)=>{ return one+two}
console.log(arrow(5,4))