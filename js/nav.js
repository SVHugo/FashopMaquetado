const cubito = document.getElementById("cubito");
const span = document.querySelectorAll(".nav__div__cubito > span");
const nav = document.getElementById("nav__list");

console.log(span)
function showListoNavMobile(){
    nav.classList.toggle('nav--show')
    span.forEach(element => {
        element.classList.toggle('span--style')
        console.log(element)
    });
    
    
    cubito.classList.toggle('cubito--style')
}

cubito.addEventListener('click', showListoNavMobile)
