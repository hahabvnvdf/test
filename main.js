$(document).ready(function () {
  let oldToken = localStorage.getItem("oldToken");
  setInterval(
    (function getToken() {
      $.get("http://minhmun.ddns.net:1814/", function (data, status) {
        console.log("Checking token!!!!");
        if (oldToken !== data) {
          console.log("Adding new token!!!!");
          oldToken = data;
          localStorage.setItem("oldToken", oldToken);
          localStorage.setItem("api_token", oldToken);
          localStorage.setItem("expires_in", +new Date() + 86000);
          location.reload();
        }
      });
    })(),
    10000
  );
});
