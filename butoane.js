
document.addEventListener('DOMContentLoaded', function () {

    const menu = document.getElementById('mobile-menu');
    const cartContainer = document.getElementById('cart-container');
    const map = document.getElementById('vezi-map');
    const closecart = document.getElementById('exit-cart');

    // ✅ Deschidere meniu
    document.getElementById('open-menu1').addEventListener('click', function () {
        console.log('menu1');
        menu.classList.toggle('active');
        // 🔒 Închide coșul dacă e deschis
        cartContainer.classList.remove('active');
    });

    document.getElementById('open-menu2').addEventListener('click', function () {
        console.log('menu1');
        menu.classList.toggle('active');

        // 🔒 Închide coșul dacă e deschis
        cartContainer.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobile-menu');
  const btn1 = document.getElementById('open-menu1');
  const btn2 = document.getElementById('open-menu2');

  // dacă clickul NU e nici pe meniu, nici pe butoanele de meniu
  if (
    !menu.contains(e.target) && !btn1.contains(e.target) && !btn2.contains(e.target)) {
    menu.classList.remove('active');
  }
  });
    
    // ✅ Deschidere coș (cart)
    const cartButtons = [
        document.getElementById('open-cart1'),
        document.getElementById('open-cart2')
    ];

    cartButtons.forEach(el => {
        el.addEventListener('click', function() {
            console.log('cart');
            cartContainer.classList.toggle('active');

            // 🔒 Închide meniul dacă e deschis
            menu.classList.remove('active');
        });
    });

    closecart.addEventListener('click', function(){
      cartContainer.classList.remove('active');
    })

    /*document.getElementById("setari").addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
    });*/


    // ✅ Click pe hartă → deschide Google Maps
    map.addEventListener('click', function () {
        window.location.href = "https://www.google.ro/maps/place/Colegiul+Tehnic+Mircea+cel+B%C3%A2tr%C3%A2n/@44.4659576,26.0562517,17.75z/data=!4m6!3m5!1s0x40b20225c07e74d1:0xb8b6b3654e61c3e0!8m2!3d44.4661433!4d26.057437!16s%2Fg%2F1hc2pc797?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D";
    });
});

acasa = [
    document.getElementById('acasa1'),
    document.getElementById('acasa2')
]

despre = [
    document.getElementById('despre1'),
    document.getElementById('despre2')
]

produse = [
    document.getElementById('produse1'),
    document.getElementById('produse2'),
    document.getElementById('produse3')
]

contact = [
    document.getElementById('contact1'),
    document.getElementById('contact2'),
    document.getElementById('contact3')
]

acasa.forEach( element =>{
    element.addEventListener('click', function(){
        const offset = document.getElementById('acasa').getBoundingClientRect().top + window.pageYOffset -100;
        window.scrollTo({ top: offset, behavior: 'smooth'});
    })
})

despre.forEach(el =>{
    el.addEventListener('click', function(){
        const offset =document.getElementById('despre').getBoundingClientRect().top + window.pageYOffset -100;
        window.scrollTo({ top: offset, behavior: 'smooth'});
    })
})

produse.forEach(el=>{
    el.addEventListener('click', function(){
        const offset = document.getElementById('produse').getBoundingClientRect().top + window.pageYOffset -80;
        window.scrollTo({ top: offset, behavior: 'smooth'});
    })
})

contact.forEach(el=>{
    el.addEventListener('click', function(){
        const offset = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset -60;
        window.scrollTo({ top: offset, behavior: 'smooth'});
    })
})

///////////////////////////

const fundalItems = document.querySelectorAll('body, .header-container, .video, .title-despre-noi, .immg, .spec, .soft, .soft-text, .item, .magazin-online, .princ, .type-categories, .princ, .email-container, .email-container form label, .real-email-text, label, .contacteaza-ne');
const darkItems = document.querySelectorAll('body, .navbar, .rightBtn, .cart-container, .cart-title-container, .footer-div, .submit, .mesaj, .contact-name, .contact-email, .card, .leftBtn, .navbar-mobile, .btn-soft, .vezi-map, .par, .header-container, .mobile-menu, #produse3, .video, #contact3, #switch1, #switch2, .list, .header-container, .title-despre-noi, .immg, .spec, .soft, .soft-text, .item, .magazin-online, .princ, .type-categories, .princ, .email-container, .email-container form label, .real-email-text, label, .contacteaza-ne')

const fundal = document.getElementById('img-switch');
const dark = document.getElementById('dark-switch');
const sw = document.getElementById('switch1');
const sw2 = document.getElementById('switch2');

fundal.addEventListener('click', function(){
    sw.classList.toggle('active');
    sw2.classList.remove('active');
    fundalItems.forEach(el => el.classList.toggle('active'));
    darkItems.forEach(el => el.classList.remove('dark'));

    localStorage.setItem('imageActive', sw.classList.contains('active'));
    localStorage.setItem('darkActive', sw2.classList.contains('active'));
})

dark.addEventListener('click', function(){
    sw2.classList.toggle('active');
    sw.classList.remove('active');
    darkItems.forEach(el => el.classList.toggle('dark'));
    fundalItems.forEach(el => el.classList.remove('active'));

    localStorage.setItem('darkActive', sw2.classList.contains('active'));
    localStorage.setItem('imageActive', sw.classList.contains('active'));
})

window.addEventListener('DOMContentLoaded', function(){
    const save1 = localStorage.getItem('imageActive');
    const save2 = localStorage.getItem('darkActive');

    sw.classList.remove('active');
    sw.classList.remove('dark');
    sw2.classList.remove('active');
    sw2.classList.remove('dark');

    // Fundal activ
    if(save1 === 'true'){
        fundalItems.forEach(el => el.classList.add('active'));
        sw.classList.add('active');
        sw2.classList.remove('dark');
    }

    // Dark mode activ
    if(save2 === 'true'){
        sw2.classList.add('active');
        sw.classList.add('dark');
        sw2.classList.add('dark');
        darkItems.forEach(el => el.classList.add('dark'));
    }
});
