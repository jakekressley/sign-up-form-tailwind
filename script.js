let password = document.querySelector('#user_password');
let confirm_password = document.querySelector('#user_confirm_password');

function validatePassword() {
    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.addEventListener('input', validatePassword);
confirm_password.addEventListener('input', validatePassword);
