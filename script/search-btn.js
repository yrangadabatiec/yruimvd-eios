function functionSearch() {
    document.getElementById("search-content").classList.toggle("search-show");
}

window.onclick = function(event) {
  if (!event.target.matches('.search-icon')) {

    var dropdowns = document.getElementsByClassName("search-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('search-show')) {
        openDropdown.classList.add('search-show');
      }
    }
  }
}