'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var subtitles = document.querySelectorAll('.hero-subtitle');
  var index = 0;

  function showNextSubtitle() {
    // Fade out the current subtitle
    subtitles[index].classList.remove('fadeIn'); // Remove fadeIn class
    setTimeout(function() {
      subtitles[index].classList.add('hidden');
      index = (index + 1) % subtitles.length;
      // Fade in the next subtitle
      subtitles[index].classList.remove('hidden');
      setTimeout(function() {
        subtitles[index].classList.add('fadeIn'); // Add fadeIn class
      }, 50); // Add a slight delay for better animation
    }, 500); // Adjust the delay (in milliseconds) for fade-out effect
    setTimeout(showNextSubtitle, 2000); // Adjust the delay (in milliseconds) between lines
  }

  // Initially show the first subtitle
  subtitles[index].classList.remove('hidden');
  showNextSubtitle();
});

