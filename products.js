import "../assets/styles/styles.scss";
import "./products.scss";



/* Items hover */

let itemsImages = document.querySelectorAll('.item-groupe img');
const mobileContent = document.querySelector('#mobile-content');
const laptopContent = document.querySelector('#laptop-content');
const tvContent = document.querySelector('#tv-content');
let mobile = document.querySelector('.mobile-item');
let laptop = document.querySelector('.laptop-item');
let tv = document.querySelector('.tv-item');


mobile.addEventListener('mouseover', ()=> {
    itemsImages[0].classList.add('hover-item')
    mobileContent.style.visibility = 'visible';
})
mobile.addEventListener('mouseleave', ()=> {
    itemsImages[0].classList.remove('hover-item')
    mobileContent.style.visibility = 'hidden';
})

laptop.addEventListener('mouseover', ()=> {
    itemsImages[1].classList.add('hover-item')
    laptopContent.style.visibility = 'visible';
})
laptop.addEventListener('mouseleave', ()=> {
    itemsImages[1].classList.remove('hover-item');
    laptopContent.style.visibility = 'hidden';
})

tv.addEventListener('mouseover', ()=> {
    itemsImages[2].classList.add('hover-item');
    tvContent.style.visibility = 'visible';
})
tv.addEventListener('mouseleave', ()=> {
    itemsImages[2].classList.remove('hover-item');
    tvContent.style.visibility = 'hidden';
})

/* Hamburger Menu */

const showMenuBtn = document.querySelector('#menu');

showMenuBtn.addEventListener('click', ()=> {
    showMenuBtn.classList.toggle('changeMenu');
    document.getElementById('nav').classList.toggle('changeMenu');
    document.getElementById('menu-bg').classList.toggle('change-menu-bg');
})
