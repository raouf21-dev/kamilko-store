import "../assets/styles/styles.scss";
import "./tv.scss";

// get modal element 
let modal = document.querySelector('#simpleModal');

// get open modal button 

let modalBtn = document.querySelectorAll('.see_details');

// get close button

let closeBtn = document.querySelector('.closeBtn');

modalBtn.forEach((item,index)=> {
    item.addEventListener('click', (e)=> {
        // console.log(e.target[className]);
        if(index === 0){
            location.href = 'tv1.html'
        }else if(index === 1) {
            location.href = 'tv1.html'
        }else if(index === 2) {
            location.href = 'tv1.html'
        }else if(index === 3) {
            location.href = 'tv1.html'
        }else if(index === 4) {
            location.href = 'tv1.html'
        }else if(index === 5) {
            location.href = 'tv1.html'
        }else if(index === 6) {
            location.href = 'tv1.html'
        }else if(index === 7) {
            location.href = 'tv1.html'
        }else if(index === 8) {
            location.href = 'tv1.html'
        }else if(index === 9) {
            location.href = 'tv1.html'
        }
        // console.log(e);
        // console.log(e.target.id);
        // if(e.path[0].className == 'btn-item-view see_details') {
        //     alert(5)
        // }else {
        //     alert("can not be find")
        // }
        // modal.style.display = 'block';
    })
})





/* Hamburger Menu */

const showMenuBtn = document.querySelector('#menu');

showMenuBtn.addEventListener('click', ()=> {
    showMenuBtn.classList.toggle('changeMenu');
    document.getElementById('nav').classList.toggle('changeMenu');
    document.getElementById('menu-bg').classList.toggle('change-menu-bg');
})








