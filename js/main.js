(function () {
	fizz()
	whatYearIsIt()

	function fizz() { 
		for (var i = 1; i < 101; i++) {
			// my method
			if (i % (3*5) == 0) console.log("FizzBuzz");
			else if (i % 3 == 0) console.log("Fizz");
			else if (i % 5 == 0) console.log("Buzz");
			else console.log(i);

			// fastest method
			// console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
		}
	}

	function whatYearIsIt() {
		document.querySelector('span.what-year-is-it').innerHTML = new Date().getFullYear()
	}
})();