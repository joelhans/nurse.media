$(function() {
  var base, container, getPage;
  base = $('body').attr('data-base');
  container = $('main');
  getPage = function(url) {
    return container.load(url + ' main', function(data) {
      return document.title = data.match("<title>(.*?)</title>")[1];
    });
  };
  $('nav a').click(function(ev) {
    var $this, title, url;
    ev.preventDefault();
    $this = $(this);
    url = $this.attr('href');
    title = $this.attr('data-text');
    history.pushState({
      url: url,
      title: title
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
