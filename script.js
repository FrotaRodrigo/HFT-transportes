// MENU-TOGGLE //

let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show= !show;

})

// Animations //



const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const galery = document.querySelectorAll('.hidden')

galery.forEach((galerys) => myObserver.observe(galerys))

// Button //

const gotopBtn = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        gotopBtn.classList.add("active");
    } else {
        gotopBtn.classList.remove("active");
    }
})

var swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// // FORM //

// const form   = document.querySelector('form-appointment');
// const campos = document.querySelectorAll('.required');
// const spans  = document.querySelectorAll('.span-required');
// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// const states = document.querySelector("state");

// form-appointment.addEventListener('submit', (event) =>{
//     event.preventDefault();
//     nameValidate();
//     emailValidate();
//     numberPhone();
//     message();
// })

// function setError(index){
//     campos[index].style.border = '2px solid #e63636';
//     spans[index].style.display = 'block';
// }

// function removeError(index){
//     campos[index].style.border = '';
//     spans[index].style.display = 'none';
// }

// function nameValidate(){
//     if(campos[0].value.length < 3)
//     {
//         setError(0);
//     }
//     else
//     {
//         removeError(0);
//     }
// }

// function emailValidate(){
//     if(!emailRegex.test(campos[1].value))
//     {
//         setError(1);
//     }
//     else
//     {
//         removeError(1);
//     }
// }

// function numberPhone(){
//     if(campos[2].value.length < 9)
//     {
//         setError(2);
//     }
//     else
//     {
//         removeError(2);
//     }
// }


// function message(){
//     if(campos[3].value.length < 100)
//     {
//         setError(3);
//     }
//     else
//     {
//         removeError(3);
//     }
// }
