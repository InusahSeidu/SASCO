/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*Custom JavaScript for changing headers*/
// Array of different headers
var headers = [
  "Welcome!",
  "Discover Amazing Products!",
  "Shop with Confidence!",
];

// Function to change header every 3 seconds
function changeHeader() {
  var index = 0;
  setInterval(function () {
    $("#changing-header").fadeOut(400, function () {
      $(this).text(headers[index]).fadeIn(400);
      index = (index + 1) % headers.length;
    });
  }, 3000);
}

// Call the function when the document is ready
$(document).ready(function () {
  changeHeader();
});
/*//////////////////////////////////////////////////////////////////////*/
