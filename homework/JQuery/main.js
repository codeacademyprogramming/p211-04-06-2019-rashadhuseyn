const section = [...document.getElementsByClassName("section")];
const text = [...document.querySelectorAll ('.section p')];
let i = 0;


section.forEach(function(item){
item.addEventListener('click', function(){
i = section.indexOf(item);
text.forEach(function(txt){
txt.classList.add("d-none");
})
text[i].classList.remove("d-none");
})
})