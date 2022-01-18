// MENU
const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelectorAll(".menu-toggle");

for(const element of menuToggle){
  element.addEventListener("click", () => {
    menuSection.classList.toggle("on");
  });
}

//Removendo o menu ao clicar em um dos links
const links = document.querySelectorAll("nav ul li a");

for(const link of links){
  link.addEventListener("click", () => {
    menuSection.classList.remove("on");
  });
}

// Scroll do header
const header = document.querySelector("header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
  if(window.screenY >= navHeight){
    // scroll maior que altura do header
    header.classList.add("scroll")
  }
  else{
    // scroll menor que altura do header
    header.classList.remove("scroll")
  }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: false
});

scrollReveal.reveal(
  `header h1, header nav,
  #home .text, #home .img,
  #about .img, #about .text,
  #services .title, #services .subtitle, #services .card,
  #testimonials .title, #testimonials .container
  #contact #contact-text, #contact .links,
  footer #footer-text, footer .icons
  `,
  { interval: 100 }
);

// Slides do Carrosel
var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
var l = slide.length;
var interval = 5000;
var set;

window.onload = function () {
  initialize();
  slide[0].style.opacity = "1";
  for (var j = 0; j < l; j++) {
    indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
  }

  dots[0].style.background = "#696969";
}

function initialize() {
  if (autoplay === "true")
  set = setInterval(function () { next(); }, interval);
}

function change(index) {
  clearInterval(set);
  count = index;
  for (var j = 0; j < l; j++) {
    slide[j].style.opacity = "0";
    dots[j].style.background = "#bdbdbd";
  }

  slide[count].style.opacity = "1";
  dots[count].style.background = "#696969";
}

var count = 0;

function next() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  count++;
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }


  if (count == l) {
    count = 0;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";

  }
  else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }

  initialize()
}

function prev() {
  clearInterval(set);
  slide[count].style.opacity = "0";
  for (var j = 0; j < l; j++) {
    dots[j].style.background = "#bdbdbd";
  }

  count--;

  if (count == -1) {
    count = l - 1;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";

  }
  else {
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
  }
  
  initialize();
}

// Pegando o ano atual no footer
document.getElementById("year").innerHTML = new Date().getFullYear();