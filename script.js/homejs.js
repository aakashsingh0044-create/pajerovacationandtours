
let index = 0;

const track = document.querySelector(".ts-track");
const dots = document.querySelectorAll(".ts-dots span");

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

// Auto slide every 4 seconds
setInterval(() => {
  index++;

  if (index >= dots.length) {
    index = 0;
  }

  showSlide(index);
}, 4000);

// Click on dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});


/* ================= How We WOrk ================= */

const elements = document.querySelectorAll('.how-text, .how-image');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold:0.3 });

elements.forEach(el=>{
  observer.observe(el);
});



window.addEventListener("DOMContentLoaded", () => {

  /* ================= STEP ANIMATION ================= */

  const steps = document.querySelectorAll(".hiw-step");

  function revealSteps() {
    steps.forEach(step => {
      const top = step.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        step.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSteps);
  revealSteps();

    /* =================How we work  ================= */

const elements = document.querySelectorAll('.how-text, .how-image');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold:0.3 });

elements.forEach(el=>{
  observer.observe(el);
});

window.addEventListener("DOMContentLoaded", () => {

  /* ================= STEP ANIMATION ================= */

  const steps = document.querySelectorAll(".hiw-step");

  function revealSteps() {
    steps.forEach(step => {
      const top = step.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        step.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSteps);
  revealSteps();


  /* ================= IMAGE SLIDER (FIXED) ================= */

  const hiwTrack = document.querySelector(".hiw-track");
  const slides = document.querySelectorAll(".hiw-track img");

  let index = 0;
  const totalSlides = slides.length;

  function moveSlider() {
    index++;

    if (index >= totalSlides) {
      index = 0;
    }

    hiwTrack.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(moveSlider, 4000);

});



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});







