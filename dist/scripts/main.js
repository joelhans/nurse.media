var root;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

root.initMap = function() {
  var map;
  return map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 32.234,
      lng: -110.963
    },
    zoom: 10,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    draggable: false,
    styles: [
      {
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#FFC95E'
          }
        ]
      }, {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [
          {
            color: '#FE715D'
          }
        ]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#2d1f49'
          }
        ]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#0f3651'
          }
        ]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#FF5E5E'
          }
        ]
      }
    ]
  });
};

$(function() {
  var base, container, getPage;
  base = $('body').attr('data-base');
  container = $('main');
  getPage = function(url) {
    return container.load(url + ' main .grid', function(data) {
      document.title = data.match("<title>(.*?)</title>")[1];
      $('main').attr('id', '').attr('id', history.state.slug);
      if (history.state.slug.includes('contact') === true) {
        return initMap();
      }
    });
  };
  $('a').click(function(ev) {
    var $this, slug, title, url;
    ev.preventDefault();
    $this = $(this);
    url = $this.attr('href');
    title = $this.attr('data-text');
    slug = $this.attr('data-slug');
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
