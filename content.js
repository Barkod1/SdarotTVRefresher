let username = "USERNAME";
let password = "PASSWORD";

setInterval(async function() {
    if (
        document.body.innerText.includes("שגיאה 2!") ||
        (document.body.innerText.includes("מחפש שרת צפייה זמין") && document.body.innerText.includes("שגיאה!"))
    )
        location.reload();

    if (document.body.innerHTML.includes("<button class=\"btn btn-lg btn-green collapsed nontrans\" data-toggle=\"collapse\" data-target=\"\#loginForm\" aria-expanded=\"false\">התחברות לאתר</button>")) {
        let button = document.getElementsByClassName("btn btn-lg btn-green collapsed nontrans")[0]
        button.click();
        const myTimeout = await setTimeout(myStopFunction, 50);

        async function myStopFunction() {
            document.getElementsByName("username")[0].value = username;
            document.getElementsByName("password")[0].value = "password"
            const myTimeout = await setTimeout(myStopFunction1, 50);

            async function myStopFunction1() {
                document.evaluate("//button[text()='התחבר לאתר']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }
        }

    }
}, 1000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
