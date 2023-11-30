function HeaderEffect()
{
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("topnav").style.top = "0";
    } else {
      document.getElementById("topnav").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
  }
}

function init()
{
HeaderEffect();
}

document.addEventListener('DOMContentLoaded', init)