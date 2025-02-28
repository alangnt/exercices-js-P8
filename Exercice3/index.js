function calculateAverage(x) {
	let sum = 0;
	
	if (!x) return 'No numbers to calculate average';
	
	for (let i of x) {
		sum = sum + i;
	}
	
	return sum / x.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
