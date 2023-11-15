// Sliders For Gallery

currentSliderId = 1;

sliderElement = document.getElementById("slider");
totalSlides = sliderElement.childElementCount;

function next() {
  if (currentSliderId < totalSlides) {
    currentSliderId++;
    showSlide();
  }
}
function prev() {
  if (currentSliderId > 1) {
    currentSliderId--;
    showSlide();
  }
}

function showSlide() {
  slides = document.getElementById("slider").getElementsByTagName("li");
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (currentSliderId === index + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}
