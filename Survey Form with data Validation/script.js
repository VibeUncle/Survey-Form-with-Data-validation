const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError')
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const dropdownError = document.getElementById('dropdownError');
const lovemostError = document.getElementById('lovemostError');
const messageError = document.getElementById('messageError');
const submitError = document.getElementById('submitError');

alert('Dear sir/ma, please make sure your internet connection is active, so all external attachments on this form would load properly. Thank you for you time!')

function validateName(){
    let name = document.getElementById('contactName').value;

    if(name.length == 0){
        nameError.innerHTML = '&#9888 Name is required!';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = '&#9888 Full name is required!';
        return false;
    }
        nameError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg"></i>';
        return true;
}


function validatePhone(){
    let phone = document.getElementById('phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = '&#9888 Phone no is required!';
        return false;
    }
    if(phone.length != 11) {
        phoneError.innerHTML = '&#9888 Phone no should be 11 digits!';
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = '&#9888 This field can only accept digits!';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = '&#9888 Email is required!'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = '&#9888 Email is invalid!'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('message').value;
    let required = 30;
    let left = required - message.length;

    if (left>0) {
        messageError.innerHTML = left + ' more characters required!';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = '&#9888 Please fix the errors above to submit!'
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}