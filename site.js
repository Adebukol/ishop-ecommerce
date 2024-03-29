//-------------------Toggle menu
const navLink =document.getElementById("navlinks");
const hamBtn = document.getElementsByClassName("hamburger")
navLink.style.maxHeight = "0px";

hamBtn.onclick =function(){
  if(navLink.style.maxHeight = "200px"){
  hamBtn.src ="images/icon-phone.svg";
}
}
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
  productImg.src = "images/image-product-1.jpg";
}
thumbnail[1].onclick = function(){
  productImg.src = "images/image-product-2.jpg";
}
thumbnail[2].onclick = function(){
  productImg.src = "images/image-product-3.jpg";
}
thumbnail[3].onclick = function(){
  productImg.src = "images/image-product-4.jpg";
}

//-----------------cartjs
const product = [
  {
    id:0,
    image:"images/image-product-1.jpg",
    title:"White and Carton Sneakers",
    price:100,
  },
  {
    id:1,
    image:"images/black-shoe.png",
    title:"Black Curtis shoe",
    price:70,
  },
  {
    id:2,
    image:"images/bag4.png",
    title:"Pink Handbag",
    price:50,
  },
  {
    id:3,
    image:"images/blue-trainers.png",
    title:"Blue trainers",
    price:50,
  }
];

const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
  document.getElementById("productRoot").innerHTML = categories.map((item)=>
  {
    var {image, title, price} = item;
    return(
      `<div class="row">
        <div class="col-1">
          <img class="img-dit" src=${image}></img>
          </div>
          <div class="col-1">
          <p>${title}<p>
          <h4>$ ${price}.00</h4>`+
          "<button onclick ='addtocart("+(i++)+")'>Add To Cart</button>" +
          `</div>
          </div>`
    )
  }).join('')