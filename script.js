const navbar = document.getElementById("navbar");
const bar = document.getElementById("bar");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener('click',()=> {
        navbar.classList.add("active");
    })
}

if(close){
    close.addEventListener('click',()=> {
        navbar.classList.remove("active");
    })
}