$(document).ready(function () {
  let oldToken = "";
  if (localStorage.getItem("oldToken") !== null) {
    oldToken = localStorage.getItem("oldToken");
  }

  setInterval(
    (function getToken() {
      $.get("https://kungfu.minhminh13.repl.co", function (data) {
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
