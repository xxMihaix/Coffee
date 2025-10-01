
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

    // ✅ Deschidere coș (cart)
    const cartButtons = [
        document.getElementById('open-cart1'),
        document.getElementById('open-cart2')
    ];

    cartButtons.forEach(el => {
        el.addEventListener('click', function () {
            console.log('cart');
            cartContainer.classList.toggle('active');

            // 🔒 Închide meniul dacă e deschis
            menu.classList.remove('active');
        });
    });

    closecart.addEventListener('click', function(){
      cartContainer.classList.remove('active');
    })

    document.getElementById("setari").addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
    });


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