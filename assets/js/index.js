const btnClose = document.querySelector("#b-close");
const btnOpen = document.querySelector("#b-open");
const div = document.querySelector("#nav-oculto");
const divContent = document.querySelector("#box-content");
const body = document.querySelector("#body");
const main = document.querySelector("#main");
const headerTitle = document.querySelector("#header-title");

btnOpen.onclick = function(){
    div.classList.remove("n-o");
    div.classList.add("n-c");
    divContent.classList.add("shadow-o");
    main.style.marginTop = "100px";
    headerTitle.style.opacity = "0.3";
}
btnClose.onclick = function (){
    div.classList.remove("n-c");
    div.classList.add("n-o");
    divContent.classList.remove("shadow-o");
    main.style.marginTop = "0px";
    headerTitle.classList.remove("shadow-o");
    headerTitle.style.opacity = "1";
}