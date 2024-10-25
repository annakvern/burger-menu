
window.addEventListener('DOMContentLoaded', main); 

function main() {
  document.getElementById('menu').onclick(menuToggle);
}

function menuToggle() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


