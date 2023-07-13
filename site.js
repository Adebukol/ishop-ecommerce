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

function darkmode(){
  if(switchMode.src= "images/arrows_button_on.svg")
  {
    switchMode.src= "images/arrows_button_off.svg"
  }
  else if(switchMode.src= "images/arrows_button_off.svg")
  {
    switchMode.src= "images/arrows_button_on.svg"
  }
}