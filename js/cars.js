const cars = [
  {
    id: 1,
    title: "Lamborghini Huracan",
    dataPrice: 1020000,
    price: "1 020 000",
    dataPopular: 512,
    dataScore: 5,
    img: "img/1.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
  {
    id: 2,
    title: "Chevrolet Corvette",
    dataPrice: 750000,
    price: "750 000",
    dataPopular: 323,
    dataScore: 4.5,
    img: "img/2.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
  {
    id: 3,
    title: "Ferrari",
    dataPrice: 320000,
    price: "320 000",
    dataPopular: 422,
    dataScore: 2.5,
    img: "img/3.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
  {
    id: 4,
    title: "Lamborghini Urus",
    dataPrice: 980000,
    price: "980 000",
    dataPopular: 119,
    dataScore: 5,
    img: "img/4.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
  {
    id: 5,
    title: "Audi R8",
    dataPrice: 520000,
    price: "520 000",
    dataPopular: 219,
    dataScore: 4,
    img: "img/5.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
  {
    id: 6,
    title: "Chevrolet Camaro",
    dataPrice: 220000,
    price: "220 000",
    dataPopular: 750,
    dataScore: 4.5,
    img: "img/6.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
  {
    id: 7,
    title: "Maserati",
    dataPrice: 180000,
    price: "180 000",
    dataPopular: 172,
    dataScore: 2.5,
    img: "img/7.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
  {
    id: 8,
    title: "McLaren 570GT",
    dataPrice: 1800000,
    price: "1 800 000",
    dataPopular: 992,
    dataScore: 5,
    img: "img/8.png",
    text: "И нет сомнений, что интерактивные прототипы, инициированныеисключительно синтетически, превращены в посмешище, хотясамо их существование приносит.",
	transmission: "Автомат",
	belt: 2,
	gear: "Задний",
	engine: "5.2",
  },
];

const toHtml = (car) => `
			  <div
				  class="sort__item"
				  data-price="${car.dataPrice}"
				  data-popular="${car.dataPopular}"
				  data-score="${car.dataScore}"
				  data-id ="${car.id}"
				>
				  <div class="sort__body">
					<div class="sort__img-body">
					  <img class="sort__img" data-img=${car.img} src="${car.img}" alt="${car.title}" />
					</div>
					<div class="sort__title" data-title>${car.title}</div>
					<div class="sort__divider"></div>
					<div class="sort__sub-title">
					  И нет сомнений, что интерактивные прототипы, инициированные
					  исключительно синтетически, превращены в посмешище, хотя
					  само их существование приносит.
					</div>
					<div class="rating rating__set">
						<div class="rating__body">
						<div class="rating__active"></div>
						<div class="rating__items">
							<input type="radio" name="rating" value="1" class="rating__item">
							<input type="radio" name="rating" value="2" class="rating__item">
							<input type="radio" name="rating" value="3" class="rating__item">
							<input type="radio" name="rating" value="4" class="rating__item">
							<input type="radio" name="rating" value="5" class="rating__item">
						</div>
						</div> 	
						  <div class="rating__value">${car.dataScore}</div> 
						<div class="rating__popular">${car.dataPopular}</div>
					  </div>
					<div class="sort__purchase">
					  <div class="sort__price" data-outPrice>$${car.price}</div>
					  <div class="calc__price visually-hidden" data-InnerPrice="${car.dataPrice}">${car.dataPrice}</div>
					  <div class="sort__buy-btn" data-cart data-id="${car.id}">Buy</div>
					  </div>
					<div class="sort__more-btn" data-btn="open-modal" data-id="${car.id}">Подробнее</div>
					<div data-counter class="visually-hidden">1</div>
				  </div>
				</div>
  `;

function render() {
  html = cars.map(toHtml).join("");
  document.querySelector("#cars").innerHTML = html;
}
render();

const carModal = $.modal({
  title: "Car",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Закрыть",
      type: "primary",
      handler() {
        carModal.close();
        document.body.style.overflow = "auto";
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  const car = cars.find((f) => f.id === id);
  if (btnType === "open-modal") {
    carModal.setContent(`
		  <div class="modal__car-body">
			  <div class="modal__car">
			  <img src="${car.img}" alt="" />
			  <div class="modal__char">
				<div class="char__item">
					<img src="img/gear.svg"/>
					<div class="char__title">Привод</div>
					<div class="char__value">${car.gear}</div>
				</div>
				<div class="char__item">
					<img src="img/engine.svg"/>
					<div class="char__title">Двигатель</div>
					<div class="char__value">${car.engine}</div>
				</div>
				<div class="char__item">
					<img src="img/transmission.svg"/>
					<div class="char__title">Коробка передач</div>
					<div class="char__value">${car.transmission}</div>
				</div>
				<div class="char__item">
					<img src="img/belt.svg"/>
					<div class="char__title">Количество мест</div>
					<div class="char__value">${car.belt}</div>
				</div>
			  </div>
			  <div class="modal__price">$${car.price}</div>
			  </div>
			  <div class="modal__desc">
				  <div class="modal__title">${car.title}</div>
				  <div class="modal__text">${car.text}</div>
			  </div>
		  </div>
		  `);
    carModal.open();
    document.body.style.overflow = "hidden";
  }
});
