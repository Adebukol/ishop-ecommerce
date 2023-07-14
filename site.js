//-------------------Toggle menu
const navLink =document.getElementById("navlinks");
navLink.style.maxHeight = "0px";

function menutoggle(){
  if(navLink.style.maxHeight == "0px"){
    navLink.style.maxHeight = "200px";
  }
  else{
    navLink.style.maxHeight = "0px";
  }
}

const switchMode =document.getElementById("switch-btn");

// Function to handle toggle button click for light and dark mode
switchMode.onclick= function () {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode"))
  {
    switchMode.src= "images/arrows_button_off.svg"
  }
  else {
    switchMode.src= "images/arrows_button_on.svg"
  }
}

// js for product details page----------------------------------
const productImg = document.getElementById("product-img");
const thumbnail=document.getElementsByClassName("product-thumbnail")

thumbnail[0].onclick = function(){
  productImg.src = thumbnail[0].src;
}
thumbnail[1].onclick = function(){
  productImg.src = thumbnail[1].src;
}
thumbnail[2].onclick = function(){
  productImg.src = thumbnail[2].src;
}
thumbnail[3].onclick = function(){
  productImg.src = thumbnail[3].src;
}