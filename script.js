//This code has two parts--the first part is a button
//which allows you to click it and pop up a form beneath.

//The second part is a function that assigns
//input to the variables that are included in it and then
//measures those variables against the given carrying capacity.

function openForm() {
  document.getElementById("collection").style.display = "block";
}

function closeForm() {
  document.getElementById("collection").style.display = "none";
}

//ACTUAL CARRY FUNCTION
var delianCarry=301;

function nameVars(){
	var personName=document.getElementById("personName").value;
	var personWeight=document.getElementById("personWeight").value;
	var carryWeight=document.getElementById("carryWeight").value;
		if (((+carryWeight) + (+personWeight)) <= delianCarry) {
			document.getElementById("result").innerHTML= (personName) + ", Delian can carry you!";
		} else if (((+carryWeight) + (+personWeight)) > delianCarry) {
		 	document.getElementById("result").innerHTML= (personName) + ", Delian can't carry you :(";
		 } else {
		 	document.getElementById("result").innerHTML= "whoops :( Please enter a valid number!";
		 }
}

