// import { forEach } from "core-js/fn/array";
import "../assets/styles/styles.scss";
import "./phone.scss";


const items = document.querySelectorAll('.item');


// for(let i=0 ; i< items.length; i++){

//     items[i].addEventListener('click', (e)=> {
//         console.log(e.target);
//     })
// }

items.forEach((item,index)=> {
    item.addEventListener('click', (e)=> {
        if(index === 0){
            location.href = 'phone1.html'
        }else if(index === 1) {
            location.href = 'phone1.html'
        }else if(index === 2) {
            location.href = 'phone1.html'
        }else if(index === 3) {
            location.href = 'phone1.html'
        }else if(index === 4) {
            location.href = 'phone1.html'
        }else if(index === 5) {
            location.href = 'phone1.html'
        }else if(index === 6) {
            location.href = 'phone1.html'
        }else if(index === 7) {
            location.href = 'phone1.html'
        }else if(index === 8) {
            location.href = 'phone1.html'
        }else if(index === 9) {
            location.href = 'phone1.html'
        }else if(index === 10) {
            location.href = 'phone1.html'
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
