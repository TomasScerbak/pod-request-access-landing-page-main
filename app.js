function validate(){
const form = document.getElementById('form');
const email = document.getElementById('email').value;
const text = document.getElementById('text');
const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.match(regx)){
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = 'Your Email Address is Valid';
    text.style.color = 'green';
    }
    else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = "Oops! Please check your email";
    text.style.color = '#fb3e3e';
    }
    if(email === ''){
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = '';
    }
};

