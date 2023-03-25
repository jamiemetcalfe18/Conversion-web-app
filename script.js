// Create a new select element
const select = document.createElement("select");

// Create three new option elements
const option1 = document.createElement("option");
option1.value = "option1";
option1.text = "Fahrenheit to Celsius";
select.appendChild(option1);

const option2 = document.createElement("option");
option2.value = "option2";
option2.text = "Miles to Kilometers";
select.appendChild(option2);

const option3 = document.createElement("option");
option3.value = "option3";
option3.text = "Ounces to Gallons";
select.appendChild(option3);

// Add the select element to an existing div element with ID "myDiv"
const div = document.getElementById("selectDiv");
div.appendChild(select);

// calculate function
function calculate() {
  const select = document.getElementsByTagName("select")[0];
  const inputValue = parseFloat(document.getElementById("myInput").value);
  const selectedOption = select.options[select.selectedIndex].value;

  let result;
  //le mathematics
  switch(selectedOption) {
    case "option1":
      result = (inputValue - 32) * 5/9;
      break;
    case "option2":
      result = inputValue * 1.60934;
      break;
    case "option3":
      result = inputValue / 128;
      break;
    default:
      result = "Please select an option";
  }
  //spits results out
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "The result is: " + result;
}

// Get the reset button element
const resetButton = document.querySelector('input[type="reset"]');

// Add an event listener to the reset button
resetButton.addEventListener('click', () => {
  // Clear the input field and result display
  document.getElementById('myInput').value = '';
  document.getElementById('result').innerHTML = '';
});