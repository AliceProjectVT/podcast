var hamburger = document.getElementById('desplegable')
var menu = document.getElementById('menu')
hamburger.addEventListener("click", function(){
    if (menu.classList.toggle('open')){
      hamburger.style.opacity= 0.5
   }else {
      hamburger.style.opacity= 1 

   }
  
})


