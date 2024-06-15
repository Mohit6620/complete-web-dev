let mydate = new Date(); //it is a object
let date = String(mydate);
let final = mydate.toDateString();
let time = mydate.toTimeString();
console.log(final);
console.log(time);
const digi = time.split(" ")[0];

const div = document.querySelector("#clock");
const date_1 = document.querySelector("#date");
div.innerHTML = digi;
date_1.innerHTML = final;
