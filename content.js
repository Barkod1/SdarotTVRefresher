var targetString = "שגיאה 2!";

setInterval(function () {
    if (document.body.innerText.includes(targetString)) {
        location.reload();
    }
}, 1000);