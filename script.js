// - Receive an error message when the `form` is submitted if:
// - The `input` field is empty
// - The email address is not formatted correctly

// creates form
const textContainer = document.querySelector(".text-container");
const emailContainer = document.createElement("div");
emailContainer.classList.add("email-input");
const emailForm = document.createElement("form");
emailContainer.append(emailForm);
const footer = document.querySelector("footer");

emailForm.innerHTML = `
    <input type="email" name="email" placeholder="Email Address">
    <button id="email-btn" type="submit"><img src="images/icon-arrow.svg"></button>`;

textContainer.insertBefore(emailContainer, footer);

// emailForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	let userEmailInput = emailForm.querySelector("input").value;
// 	userEmailInput == ""
// 		? console.log("ERROR")
// 		: `<p style="color: red; font-size: 48px;">INPUT WAS SUCCESSFUL!</p>`;
// });

// divs are placed into an array so that the created form can be inserted into html
// const divs = document.querySelectorAll(".text-container div");
// let divArray = [];

// function makeDivArray(allDivs) {
// 	for (let i = 0; i < divs.length; i++) {
// 		divArray.push(divs[i]);
// 	}
// }
// makeDivArray(divs);
// divArray.push(emailContainer);
// console.log(divArray);



