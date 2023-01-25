$(document).ready(function() {
  $('.course__item-title').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
})
