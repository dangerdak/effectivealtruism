window.onload = function() {
  // Toggle menu
  var burger = document.getElementById("burger");
  burger.onclick = function() {
    this.classList.toggle('close-icon');
    var menu = document.getElementById('navbar');
    menu.classList.toggle('hidden');
  }
}
