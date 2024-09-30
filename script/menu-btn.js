function functionMenu() {
    document.getElementById("menu-content").classList.toggle("menu-hide");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu-icon')) {

    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('menu-hide')) {
        openDropdown.classList.add('menu-hide');
      }
    }
  }
}