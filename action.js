const products1 = [
  {title: 'Espresso', price: 9, image: 'images/CafeaClasicaImg/espressoSimple.png'},
  {title: 'Americano', price: 10, image: 'images/CafeaClasicaImg/americano.png'},
  {title: 'Cappuccino', price: 12, image: 'images/CafeaClasicaImg/Cappuccino.png'},
  {title: 'Caffe Latte', price: 13, image: 'images/CafeaClasicaImg/CaffeLatte.png'},
  {title: 'Flat White', price: 14, image: 'images/CafeaClasicaImg/FlatWhite.png'},
  {title: 'Mocha', price: 14, image: 'images/CafeaClasicaImg/Mocha.png'},
  {title: 'Espresso Tonic', price: 15, image: 'images/CafeaClasicaImg/EspressoTonic.png'},
  {title: 'Cold Brew', price: 15, image: 'images/CafeaClasicaImg/Cold Brew.png'},
  {title: 'Iced Americano', price: 12, image: 'images/CafeaClasicaImg/Iced Americano.png'},
  {title: 'Iced Latte', price: 14, image: 'images/CafeaClasicaImg/Iced Latte.png'},
  {title: 'Iced Mocha', price: 15, image: 'images/CafeaClasicaImg/Iced Mocha.png'},
  {title: 'Frappe Classic', price: 16, image: 'images/CafeaClasicaImg/Frappe Classic.png'},
];

const products2 = [
  {title: 'Ceai Jasmin', price: 2, image: 'images/CeaiImg/Ceai Jasmin.png'},
  {title: 'Ceai Assam', price: 12, image: 'images/CeaiImg/americano.png'},
  {title: 'Ceai de Padure', price: 12, image: 'images/CeaiImg/Ceai de Padure.png'},
  {title: 'Ceai de Menta', price: 12, image: 'images/CeaiImg/Ceai de Menta.png'},
  {title: 'Rooibos', price: 12, image: 'images/CeaiImg/Rooibos.png'},
  {title: 'Infuzie Lamaie', price: 13, image: 'images/CeaiImg/Infuzie Lamaie.png'},
  {title: 'Ceai Rece Vara', price: 14, image: 'images/CeaiImg/Ceai Rece Vara.png'},
];

const section1 = document.getElementById('principal-cont-1');
section1.innerHTML = '';
products1.forEach(p => {
  const productHTML = `
    <li class="card">
      <div class="img-cont"><img src="${p.image}" class="product-img"></div>
      <p class="title">${p.title}</p>
      <p class="price">${p.price} lei</p>
      <div class="btn-cont">
        <button class="buy-prod">Cumpără</button>
        <button class="see-prod">Vezi Detalii</button>
      </div>
    </li>`;
  section1.innerHTML += productHTML;
});

const section2 = document.getElementById('principal-cont-2');
section2.innerHTML = '';
products2.forEach(p => {
  const productHTML = `
    <li class="card">
      <div class="img-cont"><img src="${p.image}" class="product-img"></div>
      <p class="title">${p.title}</p>
      <p class="price">${p.price} lei</p>
      <div class="btn-cont">
        <button class="buy-prod">Cumpără</button>
        <button class="see-prod">Vezi Detalii</button>
      </div>
    </li>`;
  section2.innerHTML += productHTML;
});

const container = document.getElementById('principal-cont-1');
let scrollTargetX = container.scrollLeft;

if(innerWidth < 430){
  scrollStep = 150;
}else{
  scrollStep = 190;
}

function clampScroll(value){
  const maxScroll = container.scrollWidth - container.clientWidth;
  return Math.max(0, Math.min(value, maxScroll));
}

const leftBtn = document.getElementById('leftBtn');
leftBtn.addEventListener('click', () => {
  scrollTargetX -= scrollStep;
  scrollTargetX = clampScroll(scrollTargetX);
  container.scrollTo({ left: scrollTargetX, behavior: 'smooth' });
});

const rightBtn = document.getElementById('rightBtn');
rightBtn.addEventListener('click', () => {
  scrollTargetX += scrollStep;
  scrollTargetX = clampScroll(scrollTargetX);
  container.scrollTo({ left: scrollTargetX, behavior: 'smooth' });
});
/*

/////////////////////////////////

const container2 = document.getElementById('principal-cont-2');
let scrollTargetX2 = container2.scrollLeft;


const leftBtn2 = document.getElementById('leftBtn2');
leftBtn.addEventListener('click', () => {
  scrollTargetX2 -= scrollStep;
  scrollTargetX2 = clampScroll(scrollTargetX2);
  container2.scrollTo({ left: scrollTargetX2, behavior: 'smooth' });
});

const rightBtn2 = document.getElementById('rightBtn2');
rightBtn.addEventListener('click', () => {
  scrollTargetX2 += scrollStep;
  scrollTargetX2 = clampScroll(scrollTargetX2);
  container2.scrollTo({ left: scrollTargetX2, behavior: 'smooth' });
});*//*

function initCarousel(containerId, leftBtnId, rightBtnId) {
  const container = document.getElementById(containerId);
  let scrollTargetX = container.scrollLeft;

  let scrollStep = window.innerWidth < 430 ? 150 : 190;

  function clampScroll(value) {
    const maxScroll = container.scrollWidth - container.clientWidth;
    return Math.max(0, Math.min(value, maxScroll));
  }

  const leftBtn = document.getElementById(leftBtnId);
  const rightBtn = document.getElementById(rightBtnId);

  leftBtn.addEventListener('click', () => {
    scrollTargetX -= scrollStep;
    scrollTargetX = clampScroll(scrollTargetX);
    container.scrollTo({ left: scrollTargetX, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    scrollTargetX += scrollStep;
    scrollTargetX = clampScroll(scrollTargetX);
    container.scrollTo({ left: scrollTargetX, behavior: 'smooth' });
  });
}
*/