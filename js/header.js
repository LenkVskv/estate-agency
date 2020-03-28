var button = document.querySelector('.myButton');
if (button) {
  button.addEventListener('click', function userSection() {
    document.querySelector('.user').style.display= document.querySelector('.user').style.display == 'block' ? 'none' : 'block';
  });
}
function onResize() {
  const button = document.querySelector('.menu-btn');
  if (button) button.style.display = window.innerWidth <= 750 ? 'block' : 'none';
}
window.addEventListener('resize', onResize);
onResize();


function mainorder() {
  const account = JSON.parse(localStorage.getItem('account'));
  const login = $('#signIn');
  const logout = $('#logout-button');
  const user = $('#user_name');
  if (account !== null) {
    user.html(account.firstName);
    login.hide();
    logout.show();
    user.show();
  } else {
    login.show();
    logout.hide();
    user.hide();
  }
  logout.click((event)=>{
    event.preventDefault();
    localStorage.removeItem('account');
    mainorder();
  });
}
//
$( document ).ready(function() {
  $('#login-button').click((event) =>{
    event.preventDefault();
    let signAccount = null;
    const firstName = $('#log-login').val();
    const pass = $('#log-password').val();
    const accounts = JSON.parse(localStorage.getItem('accounts'));
    accounts.forEach((acc) => {
      if (acc.firstName === firstName && acc.pass == pass) {
        signAccount = acc;
      }
    });
    if (signAccount) {
      localStorage.setItem('account', JSON.stringify(signAccount));
      window.location.href = 'main.html';
    }
  });
  mainorder();
});
