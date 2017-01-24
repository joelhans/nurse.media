$(function() {
  var lastScrollTop, navEnabled;
  lastScrollTop = 0;
  $(window).scroll(function(ev) {
    var nav, scroll_Y;
    nav = $('nav');
    scroll_Y = $(this).scrollTop();
    if (scroll_Y >= 150 && scroll_Y > lastScrollTop && !nav.is('.nav--mode')) {
      $('nav').addClass('nav--small');
    }
    if (scroll_Y < 150 && scroll_Y <= lastScrollTop) {
      $('nav').removeClass('nav--small');
    }
    return lastScrollTop = scroll_Y;
  });
  navEnabled = false;
  $('.nav--logo img').on('click', function() {
    var menu, nav, scroll_Y, to_blur;
    nav = $('nav');
    menu = $('.nav--menu');
    to_blur = $('header, ._do, ._clients, ._about, ._contact');
    scroll_Y = $(window).scrollTop();
    if (!navEnabled && scroll_Y < 150) {

    } else if (!navEnabled && scroll_Y >= 150) {
      nav.removeClass('nav--small');
      nav.addClass('nav--mode').addClass('nav--mode');
      to_blur.addClass('blur');
      return navEnabled = true;
    } else if (nav.is('.nav--mode') && scroll_Y >= 150) {
      nav.removeClass('nav--mode').removeClass('nav--mode').removeClass('nav--mode--bottom');
      nav.addClass('nav--small');
      to_blur.removeClass('blur');
      return navEnabled = false;
    }
  });
  return $('body').on('scroll touchmove mousewheel', function(ev) {
    if (navEnabled) {
      return ev.preventDefault();
    }
  });
});
