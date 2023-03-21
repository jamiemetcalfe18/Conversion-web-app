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