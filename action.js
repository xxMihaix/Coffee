

document.addEventListener('DOMContentLoaded', function () {
  
    document.getElementById('open-menu').addEventListener('click', function () {
    
        const menu = document.getElementById('mobile-menu');
        console.log('toggle');
        menu.classList.toggle('active');
  });
});

