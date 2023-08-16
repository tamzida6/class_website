const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");
const calculateButton = document.querySelector("#calculate-btn");
const result = document.querySelector("#results");
const statement = document.querySelector("#statement");
let BMI = 0,
  heightCm = 0,
  weight = 0;

calculateButton.addEventListener("click", () => {
  heightCm = parseFloat(heightInput.value);
  weight = parseFloat(weightInput.value);

  const heightM = heightCm / 100;

  BMI = weight / (heightM * heightM);

  result.textContent = `Results: ${BMI.toFixed(2)}`;

  if (BMI < 18.5) {
    statement.textContent = "Your BMI falls within the underweight range";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    statement.textContent =
      "Your BMI falls within the normal or healthy weight range";
  } else if (BMI >= 25 && BMI < 29.9) {
    statement.textContent = "Your BMI falls within the overweight range";
  } else {
    statement.textContent = "Your BMI falls within the obese range";
  }
});

function display() {
  const a = new Date().toISOString().split("T")[0]; //to give this format 2023-07-28
  document.getElementById("date").textContent = a;
}