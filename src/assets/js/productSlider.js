const productImages = [
    'assets/images/product/landing-822fe720e46f3e02dae28ea0f03dc42b3986 1.jpg',
    'assets/images/product/51e1bd31-8241-4e65-b642-1ec81c94f25b 1.jpg',
    'assets/images/product/landing-e9caf69c5886c7025b32388550e06dae7591 1.jpg',
    'assets/images/product/landing-11ef869b61d170917fc64ecf19caa7399873 1.jpg'
]

const sliderThumbs = new Swiper('.slider__thumbs', {  
	direction: 'vertical',
    centeredSlides: false,
    slidesPerView: 'auto',
    speed: 800,
    watchOverflow: true,
    watchSlidesVisibility: true,
	navigation: { 
		nextEl: '.slider__thumbs-control--next', 
		prevEl: '.slider__thumbs-control--prev' 
	},
	breakpoints: {
		0: {
			direction: 'horizontal',
            spaceBetween: 10,
		},
        476: {
            direction: 'horizontal',
            spaceBetween: 20,
		},
		801: {
			direction: 'vertical',
            spaceBetween: 10,
		}
	},
    init: false,
    on: {
        click(swiper, event){
            if(isAutoPlay) {
                stopAutoPlay()
            }
        }
    }
})

const sliderPreview = new Swiper('.slider__preview', {  
    direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 32,
    grabCursor: true,
    watchOverflow: true,
    speed: 800,
	navigation: { 
		nextEl: '.slider__thumbs-control--next', 
		prevEl: '.slider__thumbs-control--prev' 
	},
	thumbs: { 
		swiper: sliderThumbs
	},
    on: {
        sliderMove(swiper, event){
            if(isAutoPlay) {
                stopAutoPlay()
            }
        }
    }

})

const createSlide = img => `
<div class="swiper-slide">
    <div class="swiper-slide-container"><img src="${img}" alt="slide"/></div>
</div>
`

function _createPreview() {
    const previewSlider = document.createElement('div')
    previewSlider.classList.add('swiper-container', 'slider__preview')


    previewSlider.insertAdjacentHTML('afterbegin', `
            <div class="swiper-wrapper"></div>
    `)

    const swiperWrapper = previewSlider.querySelector('.swiper-wrapper')

    const slides = productImages.map(createSlide).join('')
    swiperWrapper.innerHTML = slides

    document.querySelector('.slider__wrapper').appendChild(previewSlider)

    return previewSlider
}

function _createThumbs() {
    const thumbSlider = document.createElement('div')
    thumbSlider.classList.add('slider__thumbs-wrapper')

    thumbSlider.insertAdjacentHTML('afterbegin', `
        <div class="slider__thumbs-control slider__thumbs-control--prev">
            <img src="assets/images/arrow-vertical.svg" alt="arrow">
        </div>
        <div class="swiper-container slider__thumbs"> 
            <div class="swiper-wrapper"></div>
        </div>
        <div id="thumb-autoplay"><img src="assets/images/autoplay.svg" alt="autoplay"></div>
        <div class="slider__thumbs-control slider__thumbs-control--next">
            <img src="assets/images/arrow-vertical.svg" alt="arrow">
        </div>
    `)

    const swiperWrapper = thumbSlider.querySelector('.swiper-wrapper')

    const slides = productImages.map(createSlide).join('')
    swiperWrapper.innerHTML = slides

    document.querySelector('.slider__wrapper').appendChild(thumbSlider)

    return thumbSlider
}

let isAutoPlay = false

const $thumbSlider = _createThumbs()
sliderThumbs.init()

const $previewSlider = _createPreview()
sliderPreview.init()

const sliderAutoPlay = document.getElementById('thumb-autoplay')

sliderAutoPlay.addEventListener('click', () => {
    if(isAutoPlay) {
        stopAutoPlay()
        return
    }
    
    startAutoPlay()
})

function startAutoPlay() {
    isAutoPlay = true

    if(sliderPreview.activeIndex === sliderPreview.slides.length - 1) {
        sliderPreview.slideTo(0, 800, false)
    } else {
        sliderPreview.slideNext(800, false)
    }

    sliderPreview.autoplay.start()

    const img = sliderAutoPlay.querySelector('img')
    img.setAttribute('src', 'assets/images/pause.svg')
}

function stopAutoPlay() {
    isAutoPlay = false
    sliderPreview.autoplay.stop()

    const img = sliderAutoPlay.querySelector('img')
    img.setAttribute('src', 'assets/images/autoplay.svg')
}
