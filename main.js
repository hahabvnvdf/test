$(document).ready(function () {
  console.log(localStorage.getItem("oldToken"));
  let oldToken = localStorage.getItem("oldToken");
  setInterval(
    (function getToken() {
      $.get("http://minhmun.ddns.net:1814/", function (data) {
        console.log("Checking token!!!!");
        if (oldToken !== data) {
          console.log("Adding new token!!!!");
          oldToken = data;
          localStorage.setItem("oldToken", oldToken);
          localStorage.setItem("api_token", oldToken);
          localStorage.setItem("expires_in", +new Date() / 1000 + 86000);
          location.reload();
        }
      });
    })(),
    1000
  );
});
