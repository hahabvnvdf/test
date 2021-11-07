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
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://kungfu.minhminh13.repl.co");
      xhr.onload = function () {
        if (xhr.status === 200) {
          const body = xhr.responseText;
          console.log("Checking token!!!!");
          if (oldToken !== body) {
            console.log("Adding new token!!!!");
            oldToken = body;
            localStorage.setItem("oldToken", oldToken);
            localStorage.setItem("api_token", oldToken);
            localStorage.setItem("expires_in", +new Date() / 1000 + 86000);
            location.reload();
          }
        } else {
          console.log("failed");
        }
      };
      xhr.send();
    })(),
    1000
  );
});
