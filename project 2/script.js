// script.js
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Function to update the slider
function updateSlider(index) {
  document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
  updateThumbnails(index);
}

// Function to update active thumbnail
function updateThumbnails(index) {
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle('active', i === index);
  });
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider(currentIndex);
});

// Event listeners for thumbnails
thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = i;
    updateSlider(currentIndex);
  });
});

// Initialize slider
updateSlider(currentIndex);
