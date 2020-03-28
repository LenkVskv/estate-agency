$(function() {
  $('#header').load('header.html');
  $('#footer').load('footer.html');
});

jQuery(document).ready(function($) {
  setInterval(function() {
    moveRight();
  }, 5000);


  const slideCount = $('#slider ul li').length;
  const slideWidth = $('#slider ul li').width();
  const slideHeight = $('#slider ul li').height();
  const sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({width: slideWidth, height: slideHeight});

  $('#slider ul').css({width: sliderUlWidth, marginLeft: - slideWidth});

  $('#slider ul li:last-child').prependTo('#slider ul');

  function moveRight() {
    $('#slider ul').animate({
      left: - slideWidth,
    }, 200, function() {
      $('#slider ul li:first-child').appendTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };
});


