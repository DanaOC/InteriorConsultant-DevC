const iconBars = document.querySelector('.icon-bars');
const menuOverlay = document.querySelector('.menu-overlay');
const iconClose = document.querySelector('.icon-x');

iconBars.addEventListener('click', () =>{
    menuOverlay.classList.add('menu-open');
});

iconClose.addEventListener('click', () =>{
    menuOverlay.classList.toggle('menu-open');
   
});