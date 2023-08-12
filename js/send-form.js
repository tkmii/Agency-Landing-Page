const form = document.querySelector('form');
const btn = document.querySelector('.webform__btn');


function sendForm(event) {
    event.preventDefault();

    let inputName = document.getElementById('name');
    let name = inputName.value;

    let inputEmail = document.getElementById('mail');
    let email = inputEmail.value;

    let inputPhone = document.getElementById('phone');
    const phone = inputPhone.value;

    if (name === '' || phone === '' || email === '') {
        alert('Error! Please fill in the required fields.');

        if (name === '') {
            inputName.classList.add('error');
        } else {
            inputName.classList.remove('error');
        }
        
        if (phone === '') {
            inputPhone.classList.add('error');
        } else {
            inputPhone.classList.remove('error');
        }

        if (email === '') {
            inputEmail.classList.add('error');
        } else {
            inputEmail.classList.remove('error');
        }

        return false;
    } 

    function invalidName(name) {
        let re = /[0-9]/;
        return re.test(name);
    }

    if (invalidName(name)) {
        alert(`Error! The "Full Name" doesn't contain a numbers.`);
        inputName.classList.add('error');
        return false;
    } else {
        inputName.classList.remove('error');
    }

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if(!validateEmail(email)) {
        alert('Error! Email is not valid.');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    function validatePhone(phone) {
        let re = /^\+1/g;
        return re.test(phone);
    }

    if (!validatePhone(phone) || /[a-zа-яё]/i.test(phone) || phone.length !== 12) {
        alert(`Error! Please enter your phone number in "+1XXXXXXXXXX" format`);
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }

    let formData = new FormData(form);
    let keyValue = formData.entries();
    let obj = Object.fromEntries(keyValue);

    console.log(obj);
    alert('The form has been submitted');
}


form.addEventListener('submit', sendForm)
