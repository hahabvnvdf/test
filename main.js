$(document).ready(function () {
  setInterval(function () {
    /* your stuff */
    $.get("http://minhmun.ddns.net:1814/", function (data, status) {
      console.log(data);
    });
  }, 20000);
});
