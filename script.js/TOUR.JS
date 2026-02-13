window.addEventListener("DOMContentLoaded", () => {

  /* ---------------- CARD IMAGE SLIDERS ---------------- */
  const cardTracks = document.querySelectorAll(".card-track");

  cardTracks.forEach(track => {
    let cardIndex = 0;
    const slides = track.children.length;

    setInterval(() => {
      cardIndex = (cardIndex + 1) % slides;
      track.style.transform = `translateX(-${cardIndex * 100}%)`;
    }, 2500);
  });


  /* ---------------- FEATURED TOURS SLIDER ---------------- */
  const toursTrack = document.querySelector(".tours-track");

  if (toursTrack) {
    let toursIndex = 0;

    setInterval(() => {
      toursIndex++;
      if (toursIndex > toursTrack.children.length - 3) {
        toursIndex = 0;
      }
      toursTrack.style.transform = `translateX(-${toursIndex * 350}px)`;
    }, 3000);
  }


  /* ---------------- TESTIMONIAL SLIDER ---------------- */
  const tsTrack = document.querySelector(".ts-track");
  const dots = document.querySelectorAll(".ts-dots span");

  if (tsTrack && dots.length) {
    let tsIndex = 0;

    function showSlide(i) {
      tsTrack.style.transform = `translateX(-${i * 100}%)`;

      dots.forEach(dot => dot.classList.remove("active"));
      dots[i].classList.add("active");
    }

    setInterval(() => {
      tsIndex = (tsIndex + 1) % dots.length;
      showSlide(tsIndex);
    }, 4000);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        tsIndex = i;
        showSlide(tsIndex);
      });
    });
  }

});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});



document.querySelectorAll(".card-track").forEach(track => {
  let index = 0;
  const slides = track.children.length;

  setInterval(() => {
    index = (index + 1) % slides;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 2500);
});
