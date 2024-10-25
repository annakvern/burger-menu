
window.addEventListener('DOMContentLoaded', main); 

/** Start of the program */
function main() {
  menu.onclick = menuToggle;
  console.log('Inne i main');
}
/** Toggle the menu by checking if it's already showing or not. */
function menuToggle() {
  var toggle = document.getElementById("mobile-links");
  if (toggle.style.display === "block") {
    toggle.style.display = "none";
  } else {
    toggle.style.display = "block";
  }
}


