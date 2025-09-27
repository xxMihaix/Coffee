
document.addEventListener('DOMContentLoaded', function () {
  
    document.getElementById('open-menu').addEventListener('click', function () {
    
        const menu = document.getElementById('mobile-menu');
        console.log('toggle');
        menu.classList.toggle('active');
  });


 const map = document.getElementById('vezi-map');
 map.addEventListener('click', function(){
   window.location.href = "https://www.google.ro/maps/place/Colegiul+Tehnic+Mircea+cel+B%C3%A2tr%C3%A2n/@44.4659576,26.0562517,17.75z/data=!4m6!3m5!1s0x40b20225c07e74d1:0xb8b6b3654e61c3e0!8m2!3d44.4661433!4d26.057437!16s%2Fg%2F1hc2pc797?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D";
})


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
  {title: 'Ceai Jasmin', price: 12, image: 'images/CeaiImg/Ceai Jasmin.png'},
  {title: 'Ceai Assam', price: 12, image: 'images/CeaiImg/Ceai Assam.png'},
  {title: 'Ceai de Padure', price: 12, image: 'images/CeaiImg/Ceai de Padure.png'},
  {title: 'Ceai de Menta', price: 12, image: 'images/CeaiImg/Ceai de Menta.png'},
  {title: 'Rooibos', price: 12, image: 'images/CeaiImg/Rooibos.png'},
  {title: 'Infuzie Lamaie', price: 13, image: 'images/CeaiImg/Infuzie Lamaie.png'},
  {title: 'Ceai Rece Vara', price: 14, image: 'images/CeaiImg/Ceai Rece Vara.png'},
];


const products3 = [
  {title: 'Matcha Latte', price: 16, image: 'images/BauturiFreshImg/Matcha Latte.png'},
  {title: 'Chai Latte', price: 15, image: 'images/BauturiFreshImg/Chai Latte.png'},
  {title: 'Golden Latte', price: 15, image: 'images/BauturiFreshImg/Golden Latte.png'},
  {title: 'Ciocolată caldă', price: 14, image: 'images/BauturiFreshImg/Ciocolată caldă.png'},
  {title: 'Limonadă', price: 13, image: 'images/BauturiFreshImg/Limonadă.png'},
  {title: 'Fresh', price: 15, image: 'images/BauturiFreshImg/Fresh.png'},
  {title: 'Smoothie', price: 16, image: 'images/BauturiFreshImg/Smoothie.png'},
  {title: 'Apă plată', price: 7, image: 'images/BauturiFreshImg/Apă plată.png'},
  {title: 'Sucuri naturale', price: 12, image: 'images/BauturiFreshImg/Sucuri naturale.png'},
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

const section3 = document.getElementById('principal-cont-3');
section3.innerHTML = '';
products3.forEach(p => {
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
  section3.innerHTML += productHTML;
});

// JavaScript
const scrollStep = innerWidth < 430 ? 150 : 190;

// Funcție generică de clamp
function clampScroll(container, value) {
  const maxScroll = container.scrollWidth - container.clientWidth;
  return Math.max(0, Math.min(value, maxScroll));
}

// Funcție care atașează logica de scroll la un set de butoane
function setupScroll(containerId, leftBtnId, rightBtnId) {
  const container = document.getElementById(containerId);
  const leftBtn = document.getElementById(leftBtnId);
  const rightBtn = document.getElementById(rightBtnId);

  let scrollTargetX = container.scrollLeft;

  leftBtn.addEventListener("click", () => {
    scrollTargetX -= scrollStep;
    scrollTargetX = clampScroll(container, scrollTargetX);
    container.scrollTo({ left: scrollTargetX, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scrollTargetX += scrollStep;
    scrollTargetX = clampScroll(container, scrollTargetX);
    container.scrollTo({ left: scrollTargetX, behavior: "smooth" });
  });
}

// Setări pentru toate cele 3 containere
setupScroll("principal-cont-1", "leftBtn1", "rightBtn1");
setupScroll("principal-cont-2", "leftBtn2", "rightBtn2");
setupScroll("principal-cont-3", "leftBtn3", "rightBtn3");

});