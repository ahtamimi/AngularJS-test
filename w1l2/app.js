var student ={
	name : "",
	type: "student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);
function contentLoaded(event) {
	document.getElementById('name').addEventListener('keyup',keyUp);
}

function keyUp(event) {
	calculatenumaricOutput();
}

function calculatenumaricOutput() {
	student.name = document.getElementById('name').value;
	var totalnamevalue = 0;
	for (var i = student.name.length - 1; i >= 0; i--) {
		totalnamevalue += student.name.charCodeAt(i);
	}

	var output = "Total Numeric value of persons's name is " + totalnamevalue
	document.getElementById('output').innerText = output;
}

