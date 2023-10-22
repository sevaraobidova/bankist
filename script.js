'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnnextStep = document.querySelector('.next-step');
const openNav = document.querySelector('.nav-open');
const closeNav = document.querySelector('.nav-close')

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnnextStep.addEventListener('click', () => {
  const nameInput = document.getElementById('name').value;
  const surnameInput = document.getElementById('surname').value;
  const emailInput = document.getElementById('email').value;
  if (nameInput === '') {
    document.getElementById('name').style.border = '1px solid red';
  } else if (surnameInput === '') {
    document.getElementById('surname').style.border = '1px solid red';
  } else if (emailInput === '') {
    document.getElementById('email').style.border = '1px solid red';
  } else {
    closeModal();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.value = '';
      input.style.border = '1px solid black'
    })
  }

});

openNav.addEventListener('click', () => {
  document.querySelector('.nav__linkss').classList.toggle("hidden");
});
closeNav.addEventListener('click', () => {
  document.querySelector('.nav__linkss').classList.toggle("hidden");
});



const testimonials = [
  {
    header: 'Best financial decision ever!',
    testimonial:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.',
    image: 'img/user-1.jpg',
    name: 'Aarav Lynn',
    address: 'San Francisco, USA',
  },
  {
    header: 'The last step to becoming a complete minimalist',
    testimonial:
      'Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi incidunt commodi architecto numquam omnis nulla autem, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.',
    image: 'img/user-2.jpg',
    name: 'Miyah Miles',
    address: 'London, UK',
  },
  {
    header: 'Finally free from old-school banks',
    testimonial:
      'Debitis, nihil sit minus suscipit magni aperiam vel tenetur modi voluptatibus doloremque, corrupti numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.',
    image: 'img/user-3.jpg',
    name: 'Francisco Gomes',
    address: 'Lisbon, Portugal',
  },
];

let i = 0;
let j = testimonials.length;
let slide = document.querySelector('.slide');
let left = document.querySelector('.slider__btn--left');
let right = document.querySelector('.slider__btn--right');
right.addEventListener('click', () => {
  i = (i + j + 1) % j;
  displayTestimonial();
});
left.addEventListener('click', () => {
  i = (i + j - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  slide.innerHTML = `
  <div class="testimonial">
            <h5 class="testimonial__header">
              ${testimonials[i].header}
            </h5>
            <blockquote class="testimonial__text">
            ${testimonials[i].testimonial}
            </blockquote>
            <address class="testimonial__author">
              <img src="${testimonials[i].image}" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">${testimonials[i].name}</h6>
              <p class="testimonial__location">${testimonials[i].address}</p>
            </address>
          </div>
  `;
};
window.onload = displayTestimonial;
