var button = document.querySelector(".myButton");
   button.addEventListener("click", function userSection(){
   document.querySelector(".user").style.display= document.querySelector(".user").style.display == "block" ? "none" : "block";
});
function onResize(){
   var button = document.querySelector(".menu-btn");
   button.style.display = window.innerWidth <= 750 ? 'inline-block' : 'none';
}
window.addEventListener('resize', onResize);
onResize()
