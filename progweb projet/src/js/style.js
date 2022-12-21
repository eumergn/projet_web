// Compteur 
function updateCounter() {
  // le nombre de visiteur actuel
  const count = getVisitorCount();

  // mise a jour de l'element du compteur update the counter element
  const counterElement = document.getElementById("compteur");
  counterElement.innerHTML = count;
}

// mise a jour du compteur chaque 5 secs
setInterval(updateCounter, 5000);




// Carousel
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

var nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', function() {
  slides[currentSlide].style.left = '-800px';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.left = '0';
});

var prevBtn = document.getElementById('prevBtn');
prevBtn.addEventListener('click', function() {
  slides[currentSlide].style.right = '800px';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.right = '0';
});
