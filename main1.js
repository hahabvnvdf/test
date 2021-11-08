setInterval(function () {
    let oldToken = "";
    if (localStorage.getItem("oldToken") !== null) {
        oldToken = localStorage.getItem("oldToken");
    }
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
            } else {
                var xhr1 = new XMLHttpRequest();
                xhr1.open("GET", `https://api.kungfustockspro.live:8443/api/stocks/common-info?mack=BVH&token=${localStorage.getItem("api_token")}`);
                xhr1.onload = function () {
                    if (xhr1.status === 423) {
                        console.log("Need new Token!!!!")
                        var xhr2 = new XMLHttpRequest();
                        xhr2.open("GET", "https://kungfu.minhminh13.repl.co/reset");
                        xhr2.onload = function () {
                            if (xhr2.status === 200) {
                                console.log("New Token reset!!!!")
                                location.reload(); 
                            }
                         }
                        xhr2.send();
                    }
                }
                xhr1.send()
            }
        } else {
            console.log("failed");
        }
    };
    xhr.send();
}, 3000);
