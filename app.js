const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');

});
