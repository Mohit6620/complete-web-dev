//immediatly invoke function Expression
(function first_IIFE() {
  console.log("iffe means calle fuction  just after its execution ");
})(); //when we write two iffem function at same so we need to use semicolon after first so that its execution stops

((name) => {
  console.log(` iffe using arrow function name of function is ${name} `);
})("Arrow function using iffe");


for(let i=1;i<=10;i++){  //basic loop 
    console.log(i)
}

let names=['mohit','harsh','akshad']

//pritng loop by using basic method
for(let i=0;i<names.length;i++){  //loop in array 
    console.log(names[i])
}

//printing array by using for of method
for(const name of names){
    console.log(`names in the given string is ${name}`)
}

//printing array by using for in  method
for(const name in names){
    console.log(`names in the given Array is ${names[name]}`)
}

//we cant use for of loop in objects for iteration but can use for in loop in object
const obj={
    id:1,
    name:'mohit',
    class:'MCA'
}
for(const data in obj){
    console.log(`keys in the given object is ${data}`)
}
