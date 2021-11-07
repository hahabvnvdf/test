$(document).ready(function () {
  modifyLocalStorage();
  setInterval(function () {
    /* your stuff */
    modifyLocalStorage();
  }, 20000);
});

function modifyLocalStorage() {
  $.get("http://minhmun.ddns.net:1814/", function (data, status) {
    localStorage;
  });
}
