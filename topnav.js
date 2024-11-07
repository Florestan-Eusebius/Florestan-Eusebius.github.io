// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
  
// function handleEvent(event) {
//   if (document.getElementsByClassName('icon')[0].contains(event.target)) {
//     myFunction();
//   } else {
//     var x = document.getElementById("myTopnav");
//     x.className = "topnav";
//   }
//   event.stopPropagation();
// }

// window.addEventListener('click', handleEvent);
// window.addEventListener('touchstart', handleEvent);
  
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

function handleEvent(event) {
  const icon = document.getElementsByClassName('icon')[0];
  const topnav = document.getElementById("myTopnav");

  // Check if the event target is the icon or contains the icon
  if (icon.contains(event.target) || event.target === icon) {
      myFunction();
      event.preventDefault(); // Prevent default behavior only for the icon
  } else if (topnav.contains(event.target) && event.target.tagName === 'A') {
      // If a navigation link is clicked, close the menu
      topnav.className = "topnav";
  } else if (!topnav.contains(event.target)) {
      // Clicked outside the navigation menu, close the menu
      topnav.className = "topnav";
  }
  event.stopPropagation();
}

// Use event listeners for both click and touch events
['click', 'touchstart'].forEach(function(eventType) {
  window.addEventListener(eventType, handleEvent);
});



  // window.onclick = function(event) {
  //   if (document.getElementsByClassName('icon')[0].contains(event.target)) {
  //     myFunction();
  //   } else {
  //     var x = document.getElementById("myTopnav");
  //     x.className = "topnav";
  //   }
  //   event.stopPropagation()
  // }
  
  // window.addEventListener("click", function(event){
  //   if (document.getElementsByClassName('icon')[0].contains(event.target)) {
  //         myFunction();
  //       } else {
  //         var x = document.getElementById("myTopnav");
  //         x.className = "topnav";
  //       }
  //       event.stopPropagation()
  // });