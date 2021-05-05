/* Open / close hamburger menu */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
    document.getElementById("nav-bar").style.position = "fixed";
    } else {
    document.getElementById("nav-bar").style.top = "1%";
    document.getElementById("nav-bar").style.position = "absolute";
  }
  prevScrollpos = currentScrollPos;
}