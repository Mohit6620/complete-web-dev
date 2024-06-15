//it is also a method but it dose not give us changing time , time changes with refreshing of the pages
// let mydate = new Date(); //it is a object
// let date = String(mydate);
// let final = mydate.toDateString();
// let time = mydate.toTimeString();
// console.log(final);
// console.log(time);
// const digi = time.split(" ")[0];

// const div = document.querySelector("#clock");
// const date_1 = document.querySelector("#date");
// div.innerHTML = mydate.toLocaleTimeString();
// date_1.innerHTML = final;

setInterval(function () {
  //with using this funvtion we can see the running values
  let mydate = new Date();
  const div = document.querySelector("#clock");
  const date_1 = document.querySelector("#date");
  div.innerHTML = mydate.toLocaleTimeString();
  date_1.innerHTML = final;
});
