const id = 123;
let name = "mohit";
let role = "Student";
console.table([id, name, role]); //for printing data in tabular form

// for convertng anything into number
//as like this we can convert anything to any means string to number , number to string , boolean to number and vv
let value = "35a"; //it a string
let convert = Number(value);
console.log(typeof convert); //by doing this we can convert a string into number
console.log(convert); //it gives NAN means not number
// 33 = number
//33abc =nan
//null =0
//true =1
//false =0
//undefined=nan

//NON primitive date types - ARRAY , Object , Functions
let one = ["mohit", "array"]; //ARRAY
let object = {
  //object
  id: 123,
  name: "mohit",
};
let func = function () {
  //function name with func
  console.log("this is a function ");
};

func();
console.log(`use this kind of method for printing ${name} and id is ${id}`); //for good pratice
//DAte and time
let mydate = new Date(); //it is a object
let date = String(mydate);
let final = mydate.toDateString();
let time = mydate.toTimeString();
console.log(final);
console.log(time);
console.log(mydate.getDate());
console.log(mydate.getMonth() + 1);
console.log(mydate.getFullYear());
