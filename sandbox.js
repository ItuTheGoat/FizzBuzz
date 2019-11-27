let words = [];
for (let i = 1; i <= 100; i++) {
	let multipleOf3 = i % 3;
	let multipleOf5 = i % 5;

	if (multipleOf3 == 0 && multipleOf5 != 0) {
		console.log("Fizz");
	} else if (multipleOf5 == 0 && multipleOf3 != 0) {
		console.log("Buzz");
	} else if (multipleOf3 == 0 && multipleOf5 == 0) {
		console.log("FizzBuzz");
	} else {
		console.log(i);
	}
}
