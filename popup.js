document.getElementById('button').addEventListener("click", function() {
    chrome.storage.local.set({
        ["username"]: [document.getElementById("username").value]
    }).then(() => {
        console.log("saved " + [document.getElementById("username").value])
    });
    chrome.storage.local.set({
        ["password"]: [document.getElementById("password").value]
    }).then(() => {
        console.log("saved " + [document.getElementById("password").value])
    });
})