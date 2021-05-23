$(document).ready(function() {
  $('.message-button').click(function() {
    $('.main-content').css('display', 'none');
    $('.side-content').css('width', '100vw');
  });

  $('.matches').click(function() {
    $('.main-content').css('display', 'block');
    $('.side-content').css('width', 'inherit');
  });
});