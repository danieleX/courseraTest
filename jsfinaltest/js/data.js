// Set Attribute Lang
var locale = window.navigator.userLanguage || window.navigator.language,
    browserLang = locale.slice(0,2);

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
    return languages[browserLang][arg];
}

function autoTranslate() {
    selector("html")[0].setAttribute("lang", locale);

    selector("h1")[0].innerHTML = translate("title");
    selector("p")[0].innerHTML = translate("subtitle");
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/" + browserLang + "_" + browserLang.toUpperCase() + "/sdk.js#xfbml=1&version=v2.5&appId=412849558891438";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
