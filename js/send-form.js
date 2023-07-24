const form = document.querySelector('form');

function sendForm(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let keyValue = formData.entries();
    let obj = Object.fromEntries(keyValue);
    
    console.log(obj)
}

form.addEventListener('submit', sendForm)