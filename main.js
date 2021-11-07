$(document).ready(function () {
  setInterval(
    (function hello() {
      $.get("http://minhmun.ddns.net:1814/", function (data, status) {
        console.log(data);
        console.log(localStorage.getItem("api_token"));
      });
    })(),
    30000
  );
});
