
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

window.addEventListener('load', () => {
   closeIcon.style.display = "none";
   menuIcon.style.display = "block";
})

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
     menu.classList.remove("showMenu");
     hamburger.classList.remove("fixed-ham");
   closeIcon.style.display = "none";
     
    menuIcon.style.display = "block";
  } else {
     menu.classList.add("showMenu");
     hamburger.classList.add("fixed-ham");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)