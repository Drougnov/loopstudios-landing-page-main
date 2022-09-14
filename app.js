const nav = document.querySelector('nav')
const hamburgerMenu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click',()=>{
    nav.classList.toggle('open');
})