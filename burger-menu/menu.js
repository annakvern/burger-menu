
window.addEventListener('DOMContentLoaded', main); 

function main() {
  menu.onclick = menuToggle;
  console.log('Inne i main');
}

function menuToggle() {
  var toggle = document.getElementById("mobile-links");
  if (toggle.style.display === "block") {
    toggle.style.display = "none";
  } else {
    toggle.style.display = "block";
  }
}


