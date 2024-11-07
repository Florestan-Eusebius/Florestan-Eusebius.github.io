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
  if (document.getElementsByClassName('icon')[0].contains(event.target)) {
      myFunction();
      event.preventDefault(); // Prevent default behavior only for the icon
  } else {
      var x = document.getElementById("myTopnav");
      x.className = "topnav";
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