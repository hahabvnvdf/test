$(document).ready(function () {
  setInterval(
    (function hello() {
      console.log("world");
      return hello;
    })(),
    5000
  );
});

function modifyLocalStorage() {
  $.get("http://minhmun.ddns.net:1814/", function (data, status) {
    console.log(data);
  });
}
