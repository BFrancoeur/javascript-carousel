// import CookieManager from './cookie-manager.js'; // eslint-disable-line @wordpress/dependency-group
class Carousel {
	constructor() {
		this.carousel = document.getElementById( 'carousel' );
		// this.cookieManager = new CookieManager();
		this.slides = document.querySelectorAll( '.carousel__content' );
		this.logos = document.querySelectorAll( '.logo' );
		this.dots = document.querySelectorAll( '.dot' );
		this.currentSlide = 0;
		this.n = 0;
	}

	init() {
		if (document.readyState === 'complete' || document.readyState === 'interactive') {
				this.showSlides(this.slideIndex);
		} else {
			window.addEventListener('DOMContentLoaded', () => {
				this.showSlides();
			});
			window.addEventListener('load', () => {
				this.showSlides();
			});
		}
	}


	showSlides() {
		this.i = 0;
		this.slideIndex = 0;
		this.slides = document.querySelectorAll( '.carousel__content' );

		for ( this.i = 0; this.i < this.slides.length; this.i++ ) {
			this.slides[ this.i ].classList.remove('carousel--show');
		}

		this.slideIndex++;

		console.log('this.slideIndex = ', + this.slideIndex);

		if ( this.slideIndex > this.slides.length ) {
			this.slideIndex = 1;
		}

		console.log('slides[slideIndex -1] = ' + this.slides[this.slideIndex]);
		this.slides.object[ this.slideIndex - 1 ].classList.add('carousel--show');
		setInterval( this.showSlides, 2000 );
	}


	// current slide from nav dots
	// selectSlide( n, slides, logos, dots, currentSlide ) {
	// 	slides = document.querySelectorAll( '.carousel__content' );
	// 	logos = document.querySelectorAll( '.logo' );
	// 	dots = document.querySelectorAll( '.dot' );

	// 	console.log('currentSlide = ' + currentSlide);

	// 	this.slides[ currentSlide ].classList.remove( 'carousel--show' );
	// 	this.logos[ currentSlide ].classList.remove( 'active' );
	// 	this.dots[ currentSlide ].classList.remove( 'active' );

	// 	this.currentSlide = ( currentSlide = n - 1 ) % slides.length;

	// 	this.slides[ currentSlide ].classList.add( 'carousel--show' );
	// 	this.logos[ currentSlide ].classList.add( 'active' );
	// 	this.dots[ currentSlide ].classList.add( 'active' );

	// 	setInterval( this.currentSlide(), 2000 );
	// 	this.showSlides();
	// }

	// showSlides( n, slides, logos, dots, currentSlide ) {
	// 	slides = document.querySelectorAll( '.carousel__content' );
	// 	logos = document.querySelectorAll( '.logo' );
	// 	dots = document.querySelectorAll( '.dot' );

	// 	this.slides[ currentSlide ].classList.remove( 'carousel--show' );
	// 	this.logos[ currentSlide ].classList.remove( 'active' );
	// 	this.dots[ currentSlide ].classList.remove( 'active' );

	// 	this.currentSlide = ( currentSlide + 1 ) % slides.length;

	// 	this.slides[ currentSlide ].classList.add( 'carousel--show' );
	// 	this.logos[ currentSlide ].classList.add( 'active' );
	// 	this.dots[ currentSlide ].classList.add( 'active' );

	// 	setInterval( this.nextSlide(), 2000 );
	// }
} // end Carousel class

const carousel = new Carousel();
carousel.init();
