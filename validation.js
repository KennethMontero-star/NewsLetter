"ues strict";


const container = document.querySelector(".container");

const form = document.querySelector(".form");
const emailInput = document.querySelector(".input-field[name='email-input']");
const emailRegext = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

const successPage = document.querySelector(".success-page");



form.addEventListener("submit", (event) => {
    event.preventDefault()

    validateEmailInput()
});


function validateEmailInput() {

    const emailInputValue = emailInput.value.trim();
    if (emailRegext.test(emailInputValue) === false) {
        const inputLabel = document.querySelector(`.label[for=${emailInput.name}`);

        inputLabel.classList.add("label--with-error");

        emailInput.classList.add("input-field--error");

        emailInput.addEventListener("input", () => {
            inputLabel.classList.remove("label--with-error")
            emailInput.classList.remove("input-field--error")
        }, {once:true})

        return
    }

    // displaying the success page and removing the previous one.
    successPage.classList.add("success-page--display");
    container.removeChild(document.querySelector(".newsletter-page"));


    // show entered email in the success message
    document.querySelector(".user-email").textContent = emailInputValue;
}