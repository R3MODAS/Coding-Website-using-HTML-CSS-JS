let navlist = document.querySelector(".nav-list");
let menu = document.getElementsByName("menu")[0];
let close = document.getElementsByName("close")[0];

menu.addEventListener('click', ()=>{
    navlist.style.left = "0";
    menu.style.display = "none";
    close.style.display = "block";
    close.style.color = "white";
});

close.addEventListener('click', ()=>{
    navlist.style.left = "100%";
    close.style.display = "none";
    menu.style.display = "block";
    menu.style.color = "black";
})