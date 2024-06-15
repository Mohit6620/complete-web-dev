const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //// Prevent form from submitting to allow our validation
  const height = parseInt(document.querySelector("#height").value);
  const width = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results"); //for selecting id we use #
  const result_2 = document.querySelector("#results_1");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `plz give a valid height ${height}`;
  } else if (width === "" || width < 0 || isNaN(width)) {
    result.innerHTML = `plz give a valid height ${width}`;
  } else {
    const bmi = (width / (height / 100) ** 2).toFixed(2);
    //displaying result
    result.innerHTML = `<span> your bmi is ${bmi}</span>`;
    if (bmi < 18.4) {
      result_2.innerHTML = `<span> your bmi is ${bmi} and you are under weight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result_2.innerHTML = `<span> your bmi is ${bmi} and you are normal weight </span>`;
    } else {
      result_2.innerHTML = `<span> your bmi is ${bmi} and you are over weight weight </span>`;
    }
  }
});
