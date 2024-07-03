//DECLARING VARIABLES 
//These variables will store references for HTML form elements
const button = document.getElementById('submit-button');
const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//Function to handle form submission and validation
function validateForm(event) {

  event.preventDefault(); 

  let data = {};
  let errors = [];

  //Validate Full Name
  if (fullNameInput.value.trim() === '') {
    errors.push("Full Name is required.");
  } else {
    data.fullname = fullNameInput.value.trim();
  }

  //Validate Email
  if (emailInput.value.trim() === '') {
    errors.push("Email is required.");
  } else if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("Invalid Email Address.");
  } else {
    data.email = emailInput.value.trim();
  }

  //Validate Message
  if (messageInput.value.trim() === '') {
    errors.push("Message is missing.");
  } else {
    data.message = messageInput.value.trim();
  }

  //Display errors 
  if (errors.length > 0) {
    console.log(errors);

  } else {
    console.log("COLLECTED DATA:", data);
    clearForm();
  }
}

//Clear text-fields
function clearForm() {
  fullNameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

button.addEventListener('click', validateForm);