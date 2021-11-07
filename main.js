$(document).ready(function () {
  console.log("hehe");
  setInterval(function () {
    /* your stuff */
    modifyLocalStorage();
  }, 20000);
});

function modifyLocalStorage() {
  $.get("http://minhmun.ddns.net:1814/", function (data, status) {
    console.log(data);
  });
}
