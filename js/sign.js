$( document ).ready(function() {
  $('.reg-button').click((event) =>{
    event.preventDefault();
    const firstName = $('#first-name').val();
    const lastName =$('#last-name').val();
    const role =$('#role').val();
    const email = $('#email').val();
    const pass = $('#password').val();
    const accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [];
    accounts.push({firstName, lastName, role, email, pass});
    localStorage.setItem('accounts', JSON.stringify(accounts));
    window.location.href = 'main.html';
  });
});
