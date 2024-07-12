function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

window.onclick = function(event) {
  if (document.getElementsByClassName('icon')[0].contains(event.target)) {
    myFunction();
  } else {
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
  }
  event.stopPropagation()
}