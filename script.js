// Creates form
const textContainer = document.querySelector(".text-container");
const emailContainer = document.createElement("div");
const emailForm = document.createElement("form");
const footer = document.querySelector("footer");

emailContainer.classList.add("email-input");
emailContainer.append(emailForm);

emailForm.innerHTML = `
    <input type="email" name="email" placeholder="Email Address" required>
    <button id="email-btn" type="submit"><img src="images/icon-arrow.svg"></button>`;

textContainer.insertBefore(emailContainer, footer);
const emailFormButton = emailForm.querySelector("button");

/*TODO:
1. Error msg should DISAPPEAR once user puts in a valid email
2. User should be able to click on field if email was invalid
3. Msgs should only display ONCE bc you can only submit ONCE 
4. NEED TO USE SWITCH STATEMENTS */
emailFormButton.addEventListener("click", (e) => {
	e.preventDefault();
	const userEmailInput = emailForm.querySelector("input").value;
	const invalidFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	// Checks if email input field is empty
	// Checks if email address is formatted correctly
	if (
		userEmailInput.length == 0 ||
		invalidFormat.test(userEmailInput) == false
	) {
		const errorMsgContainer = document.createElement("div");
		emailForm.classList.add("invalid-input");
		errorMsgContainer.classList.add("error-msg");
		errorMsgContainer.innerText = "Please enter an email address.";
		textContainer.insertBefore(errorMsgContainer, footer);
	} else {
		const successfulMsgContainer = document.createElement("div");
		successfulMsgContainer.classList.add("successful-msg");
		successfulMsgContainer.innerText = "Email is valid!";
		textContainer.insertBefore(successfulMsgContainer, footer);
	}
});
