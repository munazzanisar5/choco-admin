let hamburg = document.querySelector(".hamburg");

let mobile_menu = document.querySelector(".mobile");

hamburg.onclick = function() {
    // mobile.style.display = "block";


    if (mobile_menu.style.display === "block") {
        mobile_menu.style.display = "none";
      } else {
        mobile_menu.style.display = "block";
      }
  }