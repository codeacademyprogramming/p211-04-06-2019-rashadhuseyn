const navbar = document.querySelector(".icon");
const menu = document.getElementById("menu");



navbar.addEventListener('click',function(){
navbar.classList.toggle('left');
menu.classList.toggle('dn');
});



