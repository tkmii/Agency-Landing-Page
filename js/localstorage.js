let name = document.querySelector('#name');
let mail = document.querySelector('#mail');
let phone = document.querySelector('#phone');
let subject = document.querySelector('#subjet');
let message = document.querySelector('#message');

let obj = {
    name: name,
    mail: mail,
    phone: phone,
    subject: subject,
    message: message,
}

for (let key in obj) {
    obj[key].value = localStorage.getItem(key)
    obj[key].oninput = () => {
        localStorage.setItem(key, obj[key].value)
        };
}

   /* arrKeys[i].value = localStorage.getItem(arrNames[k]);
    arrKeys[i].oninput = () => {
    localStorage.setItem(arrNames[k], arrKeys[i].value)
    };*/