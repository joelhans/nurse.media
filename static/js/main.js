document.addEventListener("DOMContentLoaded", function() {

  // Responsive show/hide

  document.querySelector('.nav_toggle').addEventListener("click", function(event) {
    document.querySelector('.nav_items').classList.toggle('hidden');
  });

  // Course button
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