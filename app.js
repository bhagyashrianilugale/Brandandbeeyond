gsap.to(
    ".main_text",
      {
        y:0,
        opacity:1,
        delay:0.7
      }
    
);

let sideMenu = document.getElementById("sidemenu");

function openMenu(){
  sideMenu.style.right = "0";
}

function closeMenu(){
  sideMenu.style.right = "-200px";
}
