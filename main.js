// $(document).ready(function () {
//
// });

function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

ready(function () {
  let oldToken = "";
  if (localStorage.getItem("oldToken") !== null) {
    oldToken = localStorage.getItem("oldToken");
  }

  setInterval(
    (function getToken() {
      var opts = {
        method: "GET",
        headers: {},
      };
      fetch("https://kungfu.minhminh13.repl.co", opts)
        .then(function (response) {
          return response.json();
        })
        .then(function (body) {
          console.log("Checking token!!!!");
          console.log(body);
          if (oldToken !== body) {
            // console.log("Adding new token!!!!");
            // oldToken = data;
            // localStorage.setItem("oldToken", oldToken);
            // localStorage.setItem("api_token", oldToken);
            // localStorage.setItem("expires_in", +new Date() / 1000 + 86000);
            // location.reload();
          }
        });
    })(),
    1000
  );
});
