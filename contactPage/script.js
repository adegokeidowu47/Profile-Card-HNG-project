const form = document.querySelector('form')
const submitBtn = document.querySelector('button');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const allInputs = document.querySelectorAll('input');
const WarningMsg = document.querySelector('.warningmsg');
const SuccessfulMsg = document.querySelector('#successMsg');


const setError = (elem, message) => {
    WarningMsg.innerHTML = message;
    elem.classList.add('error');
    elem.classList.remove('success');
}

const setSuccess = (elem) => {
    WarningMsg.innerText = '';
    elem.classList.add('success');
    elem.classList.remove('error');
}

const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const subjectValue = subject.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;



    if (!fullNameValue) {
        setError(fullName, 'Please, enter your full name!');
        return;
    }
    else {
        setSuccess(fullName);
    }
    if (!emailValue) {
        setError(email, 'This field is required!');
        return;
    }
    else if (!emailValue.match(emailRegex)) {
        setError(email, 'Please enter a valid email address!');
        return
    }
    else {
        setSuccess(email);
    }
    if (!subjectValue) {
        setError(subject, 'This field is required!');
        return;
    }
    else {
        setSuccess(subject);
    }


    if (!messageValue) {
        setError(message, 'This field is required!');
        return;
    }
    else if (messageValue.length < 10) {
        setError(message, 'Your characters should be more than 10!');
        return;
    }
    else {
        setSuccess(message);
    }
    return true;
}


const showSuccessfulMsg = () => {
    SuccessfulMsg.innerHTML = "Form is submitted successfully, <br/>Thank you for reaching out...";
    SuccessfulMsg.classList.add('successMsg')
    fullName.value = '';
    email.value = '';
    message.value = '';
    subject.value = '';
}

// Funtcion to remove the successful action of the form.
const removeSmg = () => SuccessfulMsg.remove();


submitBtn.addEventListener('click', function (e) {
    e.preventDefault();


    validateInputs();

    if (!validateInputs()) {
        return;
    }


    showSuccessfulMsg();
    //  To remove the successful action of the form in 3 sec.
    return (setTimeout(function () {
        removeSmg();
        window.location.reload();
    }, 3000));
});
