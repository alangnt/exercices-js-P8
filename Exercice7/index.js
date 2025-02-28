function convertToBinary() {
	let number = document.getElementById("decimalInput").value;
	
	if (/[^0-9]/.test(number)) {
		document.getElementById("binaryResult").innerHTML = "";
		return;
	}
	
	let binary = [];
	
	if (number === 0) {
		binary.push(0);
	} else {
		while (number > 0) {
			binary.push(number % 2);
			number = Math.floor(number / 2);
		}
	}
	
	document.getElementById("binaryResult").innerHTML = binary.reverse().join("");
}
