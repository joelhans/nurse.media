$ ->

  # SCROLL FEATURE

  lastScrollTop = 0
  $(window).scroll (ev) ->
    nav = $('nav')
    scroll_Y = $(this).scrollTop()

    if ( scroll_Y >= 150 && scroll_Y > lastScrollTop && !nav.is('.nav--mode') )
      $('nav').addClass('nav--small')

    if ( scroll_Y < 150 && scroll_Y <= lastScrollTop )
      $('nav').removeClass('nav--small')

    lastScrollTop = scroll_Y


  # CLICK+NAV

  navEnabled = false

  $('.nav--logo img'). on 'click', ->
    nav = $('nav')
    menu = $('.nav--menu')
    to_blur = $('header, ._do, ._clients, ._about, ._contact')
    scroll_Y = $(window).scrollTop()

    # don't open if above 150px
    if !navEnabled && scroll_Y < 150
      return

    # open
    else if !navEnabled && scroll_Y >= 150
      nav.removeClass('nav--small')
      nav.addClass('nav--mode').addClass('nav--mode')
      to_blur.addClass('blur')
      navEnabled = true

    # close
    else if nav.is('.nav--mode') && scroll_Y >= 150
      nav.removeClass('nav--mode').removeClass('nav--mode').removeClass('nav--mode--bottom')
      nav.addClass('nav--small')
      to_blur.removeClass('blur')
      navEnabled = false

  $('body').on 'scroll touchmove mousewheel', (ev) ->
    if navEnabled
      ev.preventDefault()
