$(document).ready(function() {
  $('.header').on('click', 'button', function() {
      $(this).closest('body').find('.resumecopy').slideToggle();
  })
});
