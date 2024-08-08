gsap.to(
    ".main_text",
      {
        y:0,
        opacity:1,
        delay:0.7
      }
    
);

gsap.to(
  ".book_poster",{
    y:0,
    opacity:1,
    deplay:0.8
  }
)

let sideMenu = document.querySelector("#sidemenu");

function openMenu(){
  sideMenu.style.right = "0";
}

function closeMenu(){
  sideMenu.style.right = "-200px";
}

