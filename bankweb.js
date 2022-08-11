'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
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

// const h1 = document.querySelector('h1');

// console.log(h1.que)



tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operation__tab');
  //console.log(clicked);
  if(!clicked) return;
  tabs.forEeach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c =>c.classList.remove('operations__content--active'))
  clicked.classList.add('operations__tab--active');

  document.querySelector(`operations__contents--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el!==link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }

}

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation

// const initialCoords = section1.getBoundingClientRect()

// window.addEventListener('scroll', function() {
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky')

// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//   })
// };
// const obsoptions = {
//   root:null,
//   threshold: [0, 0.2]
// }
// const observer = new IntersectionObserver(obsCallback, obsoptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHieght = nav.getBoundingClientRect().height;


const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root:null,
  threshold: 0,
  rootMargin: `-${navHieght}px`
});
headerObserver.observe(header);
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer) {
const [entry] = entries;
if(!entry.isIntersecting) return;
entry.target.classList.remove('section--hidden')
observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root:null,
  threshold:0.15,
})
allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');

})