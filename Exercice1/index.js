function pairNumbers(n, m) {
	let pairs = [];
	
	for (let i = n; i <= m; i++) {
		if (i % 2 === 0) {
			pairs.push(i);
		}
	}
	
	return pairs.join(',');
}

export default pairNumbers
