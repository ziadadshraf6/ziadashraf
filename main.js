let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let ziad = document.querySelector('.ziad')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    ziad.style.fontSize = value + 'px';
if(scrollY>= 70){
    ziad.style.fontSize = 70 + 'px';
    ziad.style.position = 'fixed';
if(scrollY >= 435){
    ziad.style.display = 'none';
}else{
    ziad.style.display = 'block';

}

}

}
const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click",()=>{
    hundleMenu();
});
function hundleMenu() {

menu.classList.toggle("is-active");
action.classList.toggle("is-active");

}
