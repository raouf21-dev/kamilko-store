import "../assets/styles/styles.scss";
import "./contact.scss"

const form = document.querySelector('form');
const errorMessage = document.querySelector('#errorMessage')
form.addEventListener('submit', e => {
    e.preventDefault();
    let formData = {
        name : document.querySelector('#name').value,
        email : document.querySelector('#email').value,
        phone : document.querySelector('#phone').value
    }


    console.log(formData.name, formData.email, formData.phone);
    if(formData.name === '' || formData.email === '' || formData.phone === ''){
        errorMessage.innerHTML = 'Please fill up the form';
    }else {
        errorMessage.innerHTML = '';
        setTimeout(() => {
            location.href = './index.html';
        }, 1000);
    }
});

/* Hamburger Menu */

const showMenuBtn = document.querySelector('#menu');

showMenuBtn.addEventListener('click', ()=> {
    showMenuBtn.classList.toggle('changeMenu');
    document.getElementById('nav').classList.toggle('changeMenu');
    document.getElementById('menu-bg').classList.toggle('change-menu-bg');
})