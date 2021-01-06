import "../assets/styles/styles.scss";
import "./login.scss";

function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector('.form-message');
    messageElement.textContent = message;
    messageElement.classList.remove('form-message-success', 'form-message-error');
    messageElement.classList.add(`form-message-${type}`)
}


let form = document.getElementById('loginForm');

form.addEventListener('submit', ()=> {
    let username = document.getElementById('username').value;
    localStorage.setItem('name', username);

    console.log(localStorage.name);
})


function setInputError(inputElement, message){
    inputElement.classList.add('form-input-error');
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove('form-input-error')
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = '';
}

window.addEventListener('DOMContentLoaded', () => {

    
    
    const loginForm = document.querySelector('#loginForm');
    const createAccountForm = document.querySelector('#createAccount');
    document.querySelector('#linkCreateAccount').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add('form-hidden');
        createAccountForm.classList.remove('form-hidden');
    })
    document.querySelector('#linkLogin').addEventListener('click', e => {
        e.preventDefault();
        createAccountForm.classList.add('form-hidden');
        loginForm.classList.remove('form-hidden');
    })
    
    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        setFormMessage(loginForm, 'error', 'username or password Incorrect')
    })

    document.querySelectorAll('.form-input').forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            if(e.target.id === "signUpUser" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 characters");
            }
        })
        inputElement.addEventListener('input', e=> {
            clearInputError(inputElement);
        })
    })
})

const showMenuBtn = document.querySelector('#menu');

showMenuBtn.addEventListener('click', ()=> {
    showMenuBtn.classList.toggle('changeMenu');
    document.getElementById('nav').classList.toggle('changeMenu');
    document.getElementById('menu-bg').classList.toggle('change-menu-bg');
});