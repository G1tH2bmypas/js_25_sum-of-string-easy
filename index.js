function sumOfString(str) {
	const length = str.length;
	let sum = 0;
	for (let i = 0; i < length; i++ ) {
		sum += Number(str[i]);
	}
	return sum;
}

module.exports = sumOfString;
