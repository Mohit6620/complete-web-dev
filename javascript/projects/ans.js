const buttons = document.querySelectorAll(".button"); // accessing buttons class
const body = document.querySelector("body"); // accessing the body element directly

buttons.forEach(function (button) {
  //creating a function which returns a node list
  console.log(button);
  button.addEventListener("click", function (e) {
    //add event listner of click and assigning it with the function of  to get target id
    console.log(e);
    console.log(e.target); // Log the event targe

    if (e.target.id === "grey") {
      //checks the condition and change bacground color
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = "pink";
    }
  });
});
