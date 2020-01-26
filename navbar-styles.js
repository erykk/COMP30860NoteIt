
function alterNavBarSearch(x) {

  if (x.classList.contains("navbar-search-inactive")) {
    x.classList.add("navbar-search-active");
    x.classList.remove("navbar-search-inactive");
  }
  else {
    x.classList.add("navbar-search-inactive");
    x.classList.remove("navbar-search-active");
  }
}
