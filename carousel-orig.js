  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

   let slidesLength = slides.length;
   let dotsLength = 0;
   slideInterval = setInterval(nextSlide, 5000);

   // function setSlideTime(slideInterval) {
   //   if (nextSlide) {
   //     slideInterval = setInterval(nextSlide, 5000);
   //   } else {
   //     slideInterval = setInterval(selectSlide, 5000);
   //   }
   // }


  function addDots() {

    let carouselNav = document.getElementById('carousel-nav');
    let span = document.createElement('span');

    span.setAttribute('class', 'dot');
    span.setAttribute('onclick', 'selectSlide(' + (dotsLength + 1) + ')');

    carouselNav.appendChild(span);

    dotsLength++;

  }

  while ( dotsLength < slidesLength ) {
    addDots();
  }


function selectSlide(n) {
    slides[currentSlide].classList.remove('showing');
    dots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide = n - 1)%slides.length;

    slides[currentSlide].classList.add('showing');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');

    slides[currentSlide].classList.remove('showing');
    dots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide+1)%slides.length;

    slides[currentSlide].classList.add('showing');
    dots[currentSlide].classList.add('active');
}
