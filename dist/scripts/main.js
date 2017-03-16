$(function() {
  var base, container, getPage;
  base = $('body').attr('data-base');
  container = $('main');
  getPage = function(url) {
    return $('main').animate({
      opacity: 0
    }, 500, function() {
      return container.load(url + ' main .grid', function(data) {
        document.title = data.match("<title>(.*?)</title>")[1];
        $('main').attr('id', '').attr('id', history.state.slug);
        $('.page__hero').addClass('hero--shifted');
        $('main').animate({
          opacity: 1
        }, 500);
        return $('.page__hero').removeClass('hero--shifted');
      });
    });
  };
  $('a').click(function(ev) {
    var $this, slug, title, url;
    ev.preventDefault();
    $this = $(this);
    url = $this.attr('href');
    title = $this.attr('data-text');
    slug = $this.attr('data-slug');
    console.log(slug, url, window.location.pathname);
    if (url === window.location.pathname) {
      return;
    }
    history.pushState({
      url: url,
      title: title,
      slug: slug
    }, title, url);
    return getPage(url);
  });
  return $(window).on('popstate', function(e) {
    var state;
    state = e.originalEvent.state;
    if (state !== null) {
      return getPage(state.url);
    } else {
      return getPage(base);
    }
  });
});
