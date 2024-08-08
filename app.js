gsap.to(
    ".main_text",
      {
        y:0,
        opacity:1,
        delay:0.7
      }
    
);

gsap.to(
  ".content_section p",
    {
      y:0,
      opacity:1,
      delay: 0.6
    }
  
);

gsap.to(
  ".book_poster",{
    y:0,
    opacity:1,
    deplay:0.8
  }
);

gsap.to(
  ".content_section h3",{
    x:0,
    opacity:1,
    deplay:0.8
  }
);

gsap.to(
  ".img_1",
    {
      y:0,
      opacity:1,
      delay:0.5,
    }
);

gsap.to(
  ".img_2",
    {
      x:0,
      opacity:1,
      delay:0.7
    }
  
);

gsap.to(
  ".info",
  {
    x:0,
    opacity:1,
    delay:0.4
  }
);

gsap.to(
  ".icon1",
  {
    x:0,
    opacity:1,
    delay:0.2
  }
);

gsap.to(
  ".icon2",
  {
    x:0,
    opacity:1,
    delay:0.4
  }
);

gsap.to(
  ".icon3",
  {
    x:0,
    opacity:1,
    delay:0.6
  }
);

gsap.to(
  ".icon4",
  {
    x:0,
    opacity:1,
    delay:0.8
  }
)



let sideMenu = document.querySelector("#sidemenu");

function openMenu(){
  sideMenu.style.right = "0";
}

function closeMenu(){
  sideMenu.style.right = "-200px";
}

