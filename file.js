var mainListDiv = document.getElementById("header"),
mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
  "use strict";
    
  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
    
};