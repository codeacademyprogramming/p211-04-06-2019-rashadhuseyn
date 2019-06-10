const menu = [...document.querySelectorAll(".menu li")];
const icon = [...document.querySelectorAll(".menu li i")];
const text = [...document.getElementsByClassName("info")];
let i = 0;

setInterval 
menu.forEach(function(li){
li.addEventListener('click',function(){
const notact = [...document.getElementsByClassName('active')];
notact.forEach(function(act){
act.classList.remove('active');
});
li.classList.add('active');
i = menu.indexOf(li);
icon.forEach(function(hidden){
hidden.classList.add('d-none');
})
icon[i].classList.remove('d-none');
text.forEach(function(closed){
closed.classList.add('d-none');
});
text[i].classList.remove('d-none');
});
});