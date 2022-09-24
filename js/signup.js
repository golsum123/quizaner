
const usernameEl = document.querySelector('#user-name');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#Confirmpasword');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 40;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
        usernameEl.style.borderColor="#FF4300";
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
        emailEl.style.borderColor="#FF4300";
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        valid = true;
    }
    return valid;
};


const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
        passwordEl.style.borderColor="#FF4300";
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters. include lowercase and uppercase, number,special characte/symbol');
        var L = document.querySelector('#i-am-a');
        L.style.marginTop="130px";
    } else {
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, "password mismatched");
        confirmPasswordEl.style.borderColor="#FF4300";
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'password mismatched');
    } else {
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    var L = document.querySelector('#i-am-a');
        L.style.marginTop="0px";
    formField.classList.add('success');
    usernameEl.style.borderColor="black";
    emailEl.style.borderColor="black";
    passwordEl.style.borderColor="black";
    confirmPasswordEl.style.borderColor="black";
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));
//Manage profile javascript code....
function getfile() {
    document.getElementById("uploadPic").click();
}
function submitform() {
    document.forms["form1"].submet();
    document.forms["form2"].submet();

}
function confirm() {
    let valid = false;
    var pass= document.getElementById("password").value;
    var confi = document.getElementById("Confirmpasword").value;
    if (confi != pass){
        document.getElementById("passconfirm").innerHTML = "password mismatched";
    }
    else{
        valid = true;
    }
    return valid;
}
function showConfirmField() {
    var password = document.querySelector(".pass1");
    password.style.width="47%";
    var confirm = document.querySelector(".pass");
    confirm.style.display= 'block';
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  } 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // student Result js code
function Average() {
    var average = document.querySelector('.first-p').textContent;
    document.querySelector('.Average').style.width = average[0]+ average[1] +"%";
}
