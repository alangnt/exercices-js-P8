function appendToDisplay(x) {
	document.getElementById('display').value += x;
}

function clearDisplay() {
	document.getElementById('display').value = '';
}

function calculateResult() {
	const resultField = document.getElementById('display');
	let expression = resultField.value;
	
	if (/\/\s*0(?![\d\.\s])/g.test(expression)) resultField.value = 'Division by zero is not allowed'
	else resultField.value = new Function('return ' + expression)();
}
