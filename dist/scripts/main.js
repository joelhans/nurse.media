$(function() {
  $('.client').mouseenter(function() {
    return $(this).delay(200);
  });
  return $('.client').mouseleave(function() {
    console.log('leaving');
    return $(this).delay(200).queue(function(next) {
      $(this).css('z-index', '');
      return next();
    });
  });
});
