let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); 
}

function nextSlide() {
  changeSlide(1);
}

function prevSlide() {
  changeSlide(-1);
}

function changeSlide(n) {
  let slides = document.getElementsByClassName("slides");
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function scrollGrid(direction) {
  const grid = document.querySelector('.unique-image-grid');
  const scrollAmount = 360; // Adjust as needed
  
  if (direction === 'next') {
    grid.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'prev') {
    grid.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }
}

function toggleAnswer(question) {
  var answer = question.nextElementSibling;
  answer.classList.toggle("show");
  question.classList.toggle("expanded");
}

