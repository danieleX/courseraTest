// Set Attribute Lang
var locale = navigator.language;

function selector(arg) {
    return document.getElementsByTagName(arg);
}



var languages = {
    en : {
        "title" : "Matching Game!",
        "subtitle" : "Click on the extra smiling face on the destra",
        "score" : "Your score is ",
        "refresh" : "Refresh to play again"
    },
    it : {
        "title" : "Cerca lo smile di troppo!",
        "subtitle" : "Clicca sullo smile di troppo sulla destra",
        "score" : "Hai totalizzato ",
        "refresh" : "Aggiorna la pagina e gioca ancora!"
    }
}

function translate(arg) {
    return languages[locale][arg];
}

function autoTranslate() {
    selector("html")[0].setAttribute("lang", locale);

    selector("h1")[0].innerHTML = translate("title");
    selector("p")[0].innerHTML = translate("subtitle");
}
