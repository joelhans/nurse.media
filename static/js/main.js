document.addEventListener("DOMContentLoaded",function(){document.querySelector(".nav_toggle").addEventListener("click",function(e){document.querySelector(".nav_items").classList.toggle("hidden")});var e=document.querySelectorAll(".checklist-pull"),c=document.querySelectorAll(".content-copywriting-checklist input");e.forEach(function(e){elHeight=e.clientHeight,e.style.marginTop=-elHeight-24+"px"}),c.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.id,n=e.target.checked;-1!=t.indexOf("_")&&(t=t.substring(0,t.indexOf("_"))),c.forEach(function(e){-1!=e.id.indexOf(t)&&(e.checked=n)})})})});