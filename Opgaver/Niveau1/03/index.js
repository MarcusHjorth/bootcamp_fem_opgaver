document.addEventListener('DOMContentLoaded', (event) => {


	const test = ["bob", "olaf"];
	
	
	function skjulElementViaCssSelector(cssSelector) {
		let element = document.querySelector(cssSelector);
		if (element) {
			element.style.display = "none"
		}
	}

	skjulElementViaCssSelector("#divElm2");
	});
	
	
	