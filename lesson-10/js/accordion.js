// STEP 6: Nab all the SUMMARY elements
const details = document.querySelectorAll('details');
//STEP 7 : Loop through details array and add an event listener for toggle
details.forEach((detail) => {
	detail.addEventListener("toggle", (event) => {
		if (event.target.open) {
			details.forEach((detail) => {
				if (detail !== event.target) {
					//this is not the details element that was clicked open
					detail.removeAttribute("open");
					
				};
			});

		};
	});

});


// STEP 9: Check in the browser to make sure there are no errors - use the console, then proceed to the CSS for the final step

//Thanks to Gemini 2.0 for the nice code refactoring.