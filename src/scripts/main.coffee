$ ->

  $('.client').mouseenter () ->
    $(this)
      .delay(200)
      # .css('z-index','1000')/

  $('.client').mouseleave () ->
    console.log 'leaving'
    $(this)
      .delay(200)
      .queue (next) ->
        $(this).css('z-index', '')
        next()


    # setTimeout ($this)->
    #   console.log $(this)
    #   $(this).css('z-index','inherit')
    # , 400


  # # scrollY = null
  # logoSmall = false
  # logoAbout = false
  # $logo = $('.nurse--logo')
  # logoX = $('.header--tagline').offset().left
  # aboutY = $('._about h1').offset().top
  # aboutX = $('._about h1').offset().left
  #
  # # Logo init
  # $('.nurse--logo').css('left', logoX)
  #
  # $(window).scroll (ev) ->
  #   scrollY = $(this).scrollTop()
  #   console.log logoSmall
  #
  #   if logoSmall == true
  #     $logo
  #       .attr 'data-top', scrollY
  #       .css 'top', scrollY + 20
  #
  # # Stick logo
  # stickyLogo = $('.nurse--logo').waypoint
  #   handler: (dir) ->
  #
  #     if dir == 'down'
  #       # $logo.css
  #       #   'position'  : 'absolute'
  #       #   'top'       : 20
  #       $logo.velocity
  #         left: 20
  #         width: 80
  #         500, "swing"
  #       logoSmall = true
  #
  #     if dir == 'up'
  #       # $logo.css
  #       #   'position': ''
  #       #   'top': 150
  #       $logo.velocity
  #         left: logoX
  #         width: 150
  #         top: 150
  #         500, "swing"
  #       logoSmall = false
  #
  #   offset: 10
  #
  # aboutLogo = $('._about h1').waypoint
  #   handler: (dir) ->
  #
  #     if dir == 'down'
  #       logoSmall = false
  #       # console.log 'triggered'
  #       # $logo.css
  #       #   'position'  : 'absolute'
  #       #   'top'       : aboutY
  #       $logo.velocity
  #         left: aboutX
  #         width: 150
  #         top: aboutY
  #         500, "swing"
  #       logoAbout = true
  #
  #     if dir == 'up'
  #       logoAbout = false
  #       logoSmall = true
  #       $logo.velocity
  #         left: 20
  #         width: 80
  #         top: scrollY + 20
  #         500, "swing"
  #
  #   offset: 400

  # $logo = $('.nurse--logo')
  # $about = $('._about')
  # logoSm = false
  # logoAb = false
  #
  # navEnabled = false
  #
  # logoNorm = () ->
  #   $logo.attr('class', 'nurse--logo')
  #   $logo.css('top', '')
  #
  # logoSmall = () ->
  #   $logo.attr('class', 'nurse--logo')
  #   $logo.addClass('logo--small')
  #   $logo.css('top', scrollY + 20)
  #
  # logoAbout = () ->
  #   $logo.attr('class', 'nurse--logo')
  #   $logo.css('transition', 'top 0.5s 0 ease')
  #   aboutO = $('._about h1').offset().top
  #   $logo.addClass('logo--about')
  #   $logo.css('top', aboutO)


  # SCROLL FEATURES

  # $(window).scroll (ev) ->
  #   scrollY = $(this).scrollTop()
  #   aboutY = $about.offset().top
  #
  #   console.log logoSm
  #
  #   $logo.css("top",Math.max(0,150-$(this).scrollTop()))

    # if scrollY < 150
    #   logoNorm()
    #   logoAb = false
    #   logoSm = false
    #
    # else if scrollY >= 150 && scrollY < aboutY && logoSm == false
    #   logoSmall()
    #   logoAb = false
    #   logoSm = true
    #
    # else if scrollY >= aboutY - 200 && logoAb == false
    #   logoAbout()
    #   logoSm = false
    #   logoAb = true

    #
    # else
    #   logoOrig()

  # $(window).scroll (ev) ->
  #   scroll_Y = $(this).scrollTop()
  #   logo = $('.nurse--logo')
  #   about = $('._about')
  #
  #   # header -> small
  #   if ( scroll_Y >= 150)
  #     logo.addClass('logo--small')
  #   else if ( scroll_Y < 150)
  #     logo.removeClass('logo--small')
  #
  #   # small - > about
  #   about_offset = about.offset().top
  #   about_height = about.outerHeight()
  #   about_setting = $('._about h1').offset().top
  #
  #   if scroll_Y >= about_offset && scroll_Y < about_offset+about_height
  #     console.log 'go!'
  #     logo.removeClass('logo--small').addClass('logo--about')
  #     logo.css('top', scroll_Y)
  #     console.log about_setting
  #   else if scroll_Y < about_offset
  #     logo.removeClass('logo--about').css('top', 'auto')
  #   else if scroll_Y >= about_offset+about_height
  #     console.log 'done'
  #     logo.removeClass('logo--about').addClass('logo--small').css('top', 'auto')
  #
  #   console.log scroll_Y, about.offset().top, about.outerHeight()

    # lastScrollTop = scroll_Y


  # CLICK+NAV

  # $('.nav--logo img'). on 'click', ->
  #   nav = $('nav')
  #   menu = $('.nav--menu')
  #   to_blur = $('header, ._do, ._clients, ._about, ._contact')
  #   scroll_Y = $(window).scrollTop()
  #
  #   # don't open if above 150px
  #   if !navEnabled && scroll_Y < 150
  #     return
  #
  #   # open
  #   else if !navEnabled && scroll_Y >= 150
  #     nav.removeClass('nav--small')
  #     nav.addClass('nav--mode').addClass('nav--mode')
  #     to_blur.addClass('blur')
  #     navEnabled = true
  #
  #   # close
  #   else if nav.is('.nav--mode') && scroll_Y >= 150
  #     nav.removeClass('nav--mode').removeClass('nav--mode').removeClass('nav--mode--bottom')
  #     nav.addClass('nav--small')
  #     to_blur.removeClass('blur')
  #     navEnabled = false
  #
  # $('body').on 'scroll touchmove mousewheel', (ev) ->
  #   if navEnabled
  #     ev.preventDefault()
