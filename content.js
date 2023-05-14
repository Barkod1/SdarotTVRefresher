let targetString = "שגיאה 2!";

setInterval(async function() {
    if (
        document.body.innerText.includes(targetString) ||
        (document.body.innerText.includes("מחפש שרת צפייה זמין") && document.body.innerText.includes("שגיאה!")))
        location.reload();
    // if (document.body.innerHTML.includes("<button type=\"button\" id=\"playMovie\" class=\"btn btn-lg btn-success btn-block\" data-id=\"{$movie['id']}\">נסה שוב</button>")) {
    //     let button = document.getElementsByClassName("btn btn-lg btn-success btn-block")[0]
    //     button.click();
    // }
    // if (document.body.innerHTML.includes("<button type=\"button\" id=\"playMovie\" class=\"btn btn-lg btn-success btn-block\">לצפייה בסרט</button>")) {

    //     let button = document.getElementsByClassName("btn btn-lg btn-success btn-block")[0]
    //     button.click();

    // }
    if (document.body.innerHTML.includes("<button class=\"btn btn-lg btn-green collapsed nontrans\" data-toggle=\"collapse\" data-target=\"\#loginForm\" aria-expanded=\"false\">התחברות לאתר</button>")) {
        console.log("not logged!")
        let button = document.getElementsByClassName("btn btn-lg btn-green collapsed nontrans")[0]
        button.click();
        chrome.storage.local.get("username").then((result) => {
            document.getElementsByName("username")[0].value = result["username"];
            chrome.storage.local.get("password").then((result) => {
                console.log("password:::  " + result["password"])
                document.getElementsByName("password")[0].value = result["password"];
                document.evaluate("//button[text()='התחבר לאתר']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            })
        })

    }
}, 1000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}