const slides = [
  {
    src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape1',
    desc: 'beautiful landscape - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
  },
  {
    src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape2',
    desc: 'gorgeous landscape - labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    src: 'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape3',
    desc: 'unbelievable landscape - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape4',
    desc: 'the best landscape in my life -  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

class Slider {
    constructor(currentSlide) {
      this.currentSlide = currentSlide;
    }

    nextSlide () {
      this.currentSlide = (this.currentSlide + 1 ) % slides.length;
    }

    prevSlide () {
      this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
    }

    updateSlideImage () {
      slideImg.src = slides[this.currentSlide].src;
      slideImg.alt = slides[this.currentSlide].alt;
      description.textContent = slides[this.currentSlide].desc;
    } 
}

const slideImg = document.querySelector('img');
let description = document.querySelector('.description');
const [prevBtn, nextBtn] = document.querySelectorAll('.navBtn');

let curr = new Slider(0);
curr.updateSlideImage();

nextBtn.addEventListener('click', () => {
  curr.nextSlide();
  curr.updateSlideImage ();
})

prevBtn.addEventListener('click', () => {
  curr.prevSlide();
  curr.updateSlideImage ();
})