import "./assets/styles/styles.scss";
import "./index.scss";
import "./laptop_items/items_laptop.scss"

/* Slider */

const carouselSlide = document.querySelector('.showcase-slider')
const carouselImage = document.querySelectorAll('.showcase-slider img')

/* buttons */

const prevBtn = document.querySelector('.fa-arrow-left');
const nextBtn = document.querySelector('.fa-arrow-right');


// counter 
let counter = 0;

const size = carouselImage[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';  

nextBtn.addEventListener('click', ()=> {
    // console.log(counter); 
    // console.log(-size * counter);
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    
    if(counter > 2) {
        carouselSlide.style.transition = "transform 1s ease-in-out";
        counter = 0;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';    
    }

    // clearInterval(sliderInterval);

    // if(clearInterval) {
    //     setTimeout(()=> {
    //         slider();
    //     },1000)
    // }

})
prevBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    // console.log(counter); 
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';  
    
    if(counter <= -1) {
        carouselSlide.style.transition = "transform 1s ease-in-out";
        counter = 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';    
    }
    // clearInterval(sliderInterval);

    // if(clearInterval(sliderInterval)) {
    //     setTimeout(()=> {
    //         slider();
    //     },1000)
    // }
})

// carouselSlide.addEventListener('transitionend', ()=> {
    
// })
/* auto slider */
// let sliderInterval = setInterval(slider, 2000);

// function slider(){

//     carouselSlide.style.transition = "transform 1s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    
//     if(counter > 2) {
//         counter = 0;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';    
//     }else if(counter <= -1) {
//         carouselSlide.style.transition = "none";
//         counter = 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';    
//     }
//     if(size === "600px"){
//         carouselSlide.style.transition = "none";

//     }
// } 


/* Items hover */

let itemsImages = document.querySelectorAll('.item-groupe img');
const mobileContent = document.querySelector('#mobile-content');
const laptopContent = document.querySelector('#laptop-content');
const tvContent = document.querySelector('#tv-content');
let mobile = document.querySelector('.mobile-item');
let laptop = document.querySelector('.laptop-item');
let tv = document.querySelector('.tv-item');

// console.log(mobile);

// console.log(itemsImages[2]);


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


// document.addEventListener('DOMContentLoaded', ()=>{
//    alert(5);
// })


/*add review */

const newReview   = document.querySelector('.new-review');
const reviewForm  = document.querySelector('.review-form');
const textArea    = document.querySelector('textarea');
const reviewError = document.querySelector('.review-error');
const btnSubmit   = document.querySelector('.submit');
const btnCancel   = document.querySelector('.cancel');
const modal = document.querySelector('#modal');

newReview.addEventListener('click', ()=> {
    reviewForm.style.display = "block";
});

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if(textArea.value == ''){
        reviewError.innerHTML = 'Please enter your review';
    }else if(textArea.value) {
        reviewError.innerHTML = '';
        textArea.value = '';
        modal.showModal();
        setTimeout(()=> {
            modal.close();
            window.location.href = "./index.html";
        },3000)
    }
});
btnCancel.addEventListener('click', e => {
    e.preventDefault();
    reviewError.innerHTML = '';
    reviewForm.style.display = "none";
    
})


/* Hamburger Menu */

const showMenuBtn = document.querySelector('#menu');

showMenuBtn.addEventListener('click', ()=> {
    showMenuBtn.classList.toggle('changeMenu');
    document.getElementById('nav').classList.toggle('changeMenu');
    document.getElementById('menu-bg').classList.toggle('change-menu-bg');
})

