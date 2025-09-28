
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