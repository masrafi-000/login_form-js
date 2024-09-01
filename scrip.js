let input_mail = document.querySelector("#email");
let input_pass = document.getElementById("password")
let button = document.querySelector(".submit-btn");
let toggleEye = document.querySelector(".input-box span");
const userData = document.querySelector("#userData");

function clearForm() {
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
}

toggleEye.addEventListener("click", (event) =>{
    let inputType = input_pass.type;
    let eye = toggleEye.querySelector(".toggle_eye");

    if (inputType == "password") {
        input_pass.setAttribute("type", "text");
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    } else {
        input_pass.setAttribute("type", "password")
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
})

userData.addEventListener("submit", (event) =>{
    event.preventDefault();

    const enterEmail = document.getElementById("email");
    const userEmail = enterEmail.value;
    const enterPassword = document.getElementById("password");
    const userPassword = enterPassword.value;

    console.log(`User Email: ${userEmail}`);
    console.log(`User Password: ${userPassword}`);

    clearForm();
})