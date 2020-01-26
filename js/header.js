var button = document.querySelector(".myButton");
   if(button) button.addEventListener("click", function userSection(){
   document.querySelector(".user").style.display= document.querySelector(".user").style.display == "block" ? "none" : "block";
});
function onResize(){
   var button = document.querySelector(".menu-btn");
   if(button) button.style.display = window.innerWidth <= 750 ? 'block' : 'none';
}
window.addEventListener('resize', onResize);
onResize();


 function mainorder(){
   let account = JSON.parse(localStorage.getItem("account"));
  let login = $("#signIn");
  let logout = $("#logout-button");
  let user = $("#user_name");
  if(account !== null){
   user.html(account.firstName);
   login.hide();
  logout.show();
  user.show();
  }
  else{
   login.show();
   logout.hide();
   user.hide();
 }
   logout.click((event)=>{
     event.preventDefault();
     localStorage.removeItem("account");
     mainorder();
 
   })
 }
// 
$( document ).ready(function() {
  $('#login-button').click((event) =>{
    event.preventDefault();
    let signAccount = null;
    let firstName = $("#log-login").val();
    let pass = $("#log-password").val();
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.forEach(acc => {
      if(acc.firstName === firstName && acc.pass == pass){
        signAccount = acc;
      }
    });
    if(signAccount){
      localStorage.setItem("account", JSON.stringify(signAccount))
      window.location.href = "main.html";
    }
  })
  mainorder();
  
});