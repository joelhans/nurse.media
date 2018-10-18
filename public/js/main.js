document.addEventListener("DOMContentLoaded", function() {

  // DOM
  var course = document.querySelector('.cta_course a'),
      tags   = document.querySelectorAll('.tag'),
      cards  = document.querySelectorAll('.card'),
      copy   = document.querySelectorAll('.copy');

  course.addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.add('hidden');
    this.nextElementSibling.classList.remove('hidden');
  });

});