$( document ).ready(function() {
  $('.reg-button').click((event) =>{
    event.preventDefault();
    let firstName = $("#first-name").val();
    let lastName =$("#last-name").val();
    let role =$("#role").val();
    let email = $("#email").val();
    let pass = $("#password").val();
    let accounts = localStorage.getItem("accounts") ? JSON.parse(localStorage.getItem("accounts")) : [];
    accounts.push({firstName, lastName, role, email, pass});
    localStorage.setItem("accounts",JSON.stringify(accounts));
    window.location.href = "main.html";
  })
});