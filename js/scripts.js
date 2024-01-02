/*Custom JavaScript for changing headers*/
document.addEventListener("DOMContentLoaded", function() {
    var headers = ["Welcome!", "Akwaaba!"];
    var headerElement = document.getElementById("changing-header");
    var index = 0;
  
    function changeHeader() {
      headerElement.innerHTML = headers[index];
      index = (index + 1) % headers.length;
    }
  
    setInterval(changeHeader, 8000); // 10 seconds interval
  });
/*//////////////////////////////////////////////////////////////////////*/
