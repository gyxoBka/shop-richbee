const analogCards = [
    {
        img: 'assets/images/goods/good1.jpg', 
        title: 'Набор инструментов МАСТАК 94 предмета 01-094C [01-094C]', 
        num: 10,
        cost: '1 150 ₽',
        wholesale: 708,
        discount: false
    },
    {
        img: 'assets/images/goods/good2.jpg', 
        title: 'Маяк импульсный светодиодный на магните 10-30V 2-режима', 
        num: 10,
        cost: '1 150 ₽',
        wholesale: 708,
        discount: false
    },
    {
        img: 'assets/images/goods/good3.jpg', 
        title: 'Указатель габаритов с повторителем поворота «Бегущие огни» на  светодиодах', 
        num: 0,
        cost: '1 150 ₽',
        wholesale: 708,
        discount: false
    },
    {
        img: 'assets/images/goods/good4.jpg', 
        title: 'Фара противотуманная дальнего света круглая с желтым габаритом (двухрежимная) 12-24 В, 27 Вт,4 узкая', 
        num: 10,
        cost: '1 150 ₽',
        wholesale: 708,
        discount: true
    }
]

const analog = document.getElementById('analog')

const analogSlider = new Swiper('.analog__slider',{
	direction: 'horizontal',
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 800,
    watchOverflow: true,
    watchSlidesVisibility: true,

    slidesOffsetAfter: 0,
    slidesOffsetBefore: 0,

    init: false,

    navigation: {
        nextEl: '.analog__control--right',
        prevEl: '.analog__control--left',
    },

    breakpoints: {
		0: {
            centeredSlides: true
		},
        414: {
            centeredSlides: false
		},
	},
});


const cardTemplate = card => `
    <div class="swiper-slide">
        <div class="card">
            <div class="card__header">
                <a href="#" class="card__img">
                    <img src="${card.img}" alt="${card.title}">
                </a>
                ${card.discount === true ? '<div class="card__discount">%</div>' : ''}
                
            </div>
            <a href="#" class="card__title">${card.title}</a>

            <div class="card__cost">
                <div class="card__stock ${card.num > 0 ? 'available' : 'unavailable'}">${card.num > 0 ? 'В наличии' : 'Нет в наличии'}</div>
                <div class="card__price">${card.cost}</div>
                <div class="card__wholesale">${card.wholesale} (оптовая) <span data-tooltip="Для получения оптовых цен, добавьте в корзину товаров ещё на <strong style='font-weight: 700;'>10 000 руб</strong> (по оптовым ценам)"><img src="assets/images/info 1.svg" alt="info"></span></div>
            </div>
            ${card.num <= 0 ? '<button class="btn btn--secondary btn--fz">Сообщить о появлении</button>' : '<button class="btn">Купить</button>'}
        </div>
    </div>
`

function renderAnalog() {
    const html = analogCards.map(cardTemplate).join('')
    analog.innerHTML = html
}

renderAnalog()
analogSlider.init()