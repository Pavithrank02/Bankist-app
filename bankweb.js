'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window



const openModal = function (e) {
e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//button scrolling
btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords)

    console.log(e.target.getBoundingClientRect());
    console.log('Current Scroll (X/Y', window.pageXOffset, window.pageYOffset);

    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageXOffset);
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset, 
    //     top: s1coords.top + window.pageXOffset,
    //     behavior: 'smooth'
    // })
    section1.scrollIntoView({behavior: 'smooth'});
}); 

//page navigation
// document.querySelectorAll('.nav__link'),forEach(function (e) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     //console.log('LINK')
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })

//Event delegation
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  //matching strategies
  if(e.target.classList.contains('nav__link')) {
    
    //     //console.log('LINK')
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})



// console.log(document.getElementsByClassName('btn'));

// const header = document.querySelector('.header');

// // const message = document.createElement('div');
// // message.classList.add('cookie-message');
// // message.textContent = 'we use cookies functionality and analytics';
// // message.innerHTML = 'we use cookies functionality and analytics.<button class="btn--close-cookie"> Got It</button>';
// // //header.prepend(message);
// // header.append(message);
// // //header.append(message.cloneNode(true));

// // document.querySelector('.btn--close-cookie').addEventListener('click', function() {
// //     message.remove();
// })

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function(e) {
//     const s1coords = section1.getBoundingClientRect();
//     console.log(s1coords)

//     console.log(e.target.getBoundingClientRect());
//     console.log('Current Scroll (X/Y', window.pageXOffset, window.pageYOffset);

//     console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

//     //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageXOffset);
//     // window.scrollTo({
//     //     left: s1coords.left + window.pageXOffset, 
//     //     top: s1coords.top + window.pageXOffset,
//     //     behavior: 'smooth'
//     // })
//     section1.scrollIntoView({behavior: 'smooth'});
// });
// const randomInt = (min, max) => Math.floor(Math.random() * (max -min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK');
// })
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK');
// })

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK');
// })

