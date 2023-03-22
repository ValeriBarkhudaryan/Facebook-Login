let email = document.getElementById('email-phone');
let password = document.getElementById('password');
let log_in_button = document.getElementById('log-in-button');
let error = document.getElementById('error');
let error_icon = document.getElementById('error-icon');


log_in_button.addEventListener('click', function(){

    if(email.value === "" && password.value === "" || email.value === "" || password.value === "") {
        error.style.display = 'block';
        email.style.border = '1px solid red';
        email.style.borderRadius = '5px';
        error_icon.style.opacity = '1'
    }

})