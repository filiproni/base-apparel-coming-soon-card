// Creates form for email input
const textContainer = document.querySelector(".text-container");
const emailContainer = document.createElement("div");
const emailForm = document.createElement("form");
const footer = document.querySelector("footer");

emailContainer.classList.add("email-input");
emailContainer.append(emailForm);

emailForm.innerHTML = `
    <input type="email" name="email" placeholder="Email Address" required>
	<button id="email-btn" type="submit"><img src="images/icon-arrow.svg"></button>
	<div id="error-msg">Please enter a valid email address.</div>
	<div id="successful-msg">Email was submitted!</div>`;

textContainer.insertBefore(emailContainer, footer);
const emailFormButton = emailForm.querySelector("button");
const userEmailInput = emailForm.querySelector("input");

// Error message disappears when user types in the input field 
userEmailInput.addEventListener("input", (e) => {
	e.preventDefault();
	emailForm.classList.remove("invalid-input");
	emailForm.querySelector("#error-msg").style.display = "none";
});

/* Validates user's input
- checks if input field is empty
- checks if email address is formatted correctly
*/
const emailValidation = () => {
	const userEmailInputValue = emailForm.querySelector("input").value;
	const invalidFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (
		userEmailInputValue.length == "" ||
		invalidFormat.test(userEmailInputValue) == false
	) {
		emailForm.classList.add("invalid-input");
		emailForm.querySelector("#error-msg").style.display = "block";
	} else {
		emailForm.querySelector("#successful-msg").style.display = "block";
	}
};

emailFormButton.addEventListener("click", (e) => {
	e.preventDefault();
	emailValidation();
});
