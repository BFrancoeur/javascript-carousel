
class Carousel {
	constructor(carousel, slides, logos, dots, slidesLength, logosLength, dotsLength, currentSlide) {
		this.carousel = document.getElementById('carousel');
		// this.cookieManager = new CookieManager();
		// this.slides = document.querySelectorAll( '.carousel__content' );
		this.logos = document.querySelectorAll( '.logo' );
		this.dots = document.querySelectorAll( '.dot' );
		// this.slidesLength;
		this.logosLength;
		// this.dotsLength;
    this.currentSlide = 0;

    this.init();
	}

	init() {
		if ( ! this.carousel ) {
			return;
		}

		// this.carousel.forEach( ( carousel ) => {
		// 	const content = carousel.querySelector( '.carousel__content' );
		// 	if ( ! content ) {
		// 		return;
		// 	}
		//
		// 	const carouselId = content.innerHTML.replace( /[^\w]/gi, '' );
		// 	const cookie = this.cookieManager.getCookie( carouselId );
		// 	if ( 'dismissed' === cookie ) {
		// 		return;
		// 	}
		// } );
	}



	// dynamically add dots to carousel that equals the number of slides
	addDots() {
		this.slides = document.querySelectorAll( '.carousel__content' );
		this.dots = document.querySelectorAll( '.dot' );

		this.slidesLength = this.slides.length;
		this.dotsLength = 0;

		const carouselNav = document.getElementById( 'carousel-nav' ),
			span = document.createElement( 'span' );

		while ( this.dotsLength < this.slidesLength ) {
			span.setAttribute( 'class', 'dot' );
			span.setAttribute( 'onclick', 'selectSlide( ' + ( this.dotsLength + 1 ) + ' )' );

			carouselNav.appendChild( span );

			this.dotsLength++;
			return this.dotsLength;
		}
	}

	// select slide from nav dots
	selectSlide( n, slides, logos, dots, currentSlide ) {
		this.slides = document.querySelectorAll( '.carousel__content' );
	  this.logos = document.querySelectorAll( '.logo' );
		this.dots = document.querySelectorAll( '.dot' );

		this.addDots(this.slides.length);



		// this.addDots(slides.length);
    console.log('this.slides: ' + this.slides);
		console.log('selectSlide: ' + selectSlide); // currentSlide is undefined
		this.slides[ selectSlide ].classList.remove( 'carousel--show' );
		this.logos[ selectSlide ].classList.remove( 'active' );
		this.dots[ selectSlide ].classList.remove( 'active' );

		this.currentSlide = ( currentSlide + 1 ) % slides.length;

		this.slides[ selectSlide ].classList.add( 'carousel--show' );
		this.logos[ selectSlide ].classList.add( 'active' );
		this.dots[ selectSlide ].classList.add( 'active' );

		setInterval( this.nextSlide(), 2000 );
	}

	nextSlide( n, slides, logos, dots, currentSlide ) {
		this.slides = document.querySelectorAll( '.carousel__content' );
	  this.logos = document.querySelectorAll( '.logo' );
		this.dots = document.querySelectorAll( '.dot' );

		this.addDots(this.slides.length);

    console.log('this.slides: ' + this.slides);
		console.log('selectSlide: ' + selectSlide); // currentSlide is undefined
		this.slides[ selectSlide ].classList.remove( 'carousel--show' );
		this.logos[ selectSlide ].classList.remove( 'active' );
		this.dots[ selectSlide ].classList.remove( 'active' );

		this.currentSlide = ( currentSlide + 1 ) % slides.length;

		this.slides[ selectSlide ].classList.add( 'carousel--show' );
		this.logos[ selectSlide ].classList.add( 'active' );
		this.dots[ selectSlide ].classList.add( 'active' );

		setInterval( this.nextSlide(), 2000 );
	}
}

let carousel = new Carousel();
carousel.nextSlide();
