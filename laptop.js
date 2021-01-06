import "../assets/styles/styles.scss";
import "./laptop.scss";

// get modal element 
let modal = document.querySelector('#simpleModal');

// get open modal button 

let modalBtn = document.querySelectorAll('.see_details');

// get close button

let closeBtn = document.querySelector('.closeBtn');

modalBtn.forEach((item,index)=> {
    item.addEventListener('click', (e)=> {
        if(index === 0){
            location.href = 'laptop1.html'
        }else if(index === 1) {
            location.href = 'laptop1.html'
        }else if(index === 2) {
            location.href = 'laptop1.html'
        }else if(index === 3) {
            location.href = 'laptop1.html'
        }else if(index === 4) {
            location.href = 'laptop1.html'
        }else if(index === 5) {
            location.href = 'laptop1.html'
        }else if(index === 6) {
            location.href = 'laptop1.html'
        }else if(index === 7) {
            location.href = 'laptop1.html'
        }else if(index === 8) {
            location.href = 'laptop1.html'
        }else if(index === 9) {
            location.href = 'laptop1.html'
        }else if(index === 10) {
            location.href = 'laptop1.html'
        }
    })
})

/* Hamburger Menu */

const showMenuBtn = document.querySelector('#menu');

showMenuBtn.addEventListener('click', ()=> {
    showMenuBtn.classList.toggle('changeMenu');
    document.getElementById('nav').classList.toggle('changeMenu');
    document.getElementById('menu-bg').classList.toggle('change-menu-bg');
})








