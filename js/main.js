(function () {
	whatYearIsIt()

	function whatYearIsIt() {
		document.querySelector('span.what-year-is-it').innerHTML = new Date().getFullYear()
	}
})();