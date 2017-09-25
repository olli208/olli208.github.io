/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Werk van Olivre Oenang, studentnummer: 500718576, klas: lila, docent: David de Vries

/*Bronnen fotos:
- http://31.media.tumblr.com/87c87fd1f6541dd1c92b25f014815a37/tumblr_mjv5r0ASLb1s5jjtzo1_500.gif
- https://upload.wikimedia.org/wikipedia/commons/b/b4/Choco_chip_cookie.png
- http://www.softwarepatch.com/articles/wp-content/uploads/2012/08/cat_in_a_box.png
- http://vignette2.wikia.nocookie.net/leviny/images/6/60/Facepalm.png/revision/latest?cb=20130108215028&path-prefix=pt
- http://newsnetwork.mayoclinic.org/files/2013/12/potatoes.jpg
- https://upload.wikimedia.org/wikipedia/de/0/02/50_cent_coin_Eu_serie_1.png
- https://giant.gfycat.com/SleepyThisGreendarnerdragonfly.gif
*/

//dit is een spel waarbij je een getal moet raden van 0-10. als je goede getal raadt dan krijg je een random prijs.


//Al mijn globale variabels:
var antwoord, pogingAantal, nieuwTekst, userInput, unoMas;
var fotos = ["images/Balloon.gif", "images/cookie.png", "images/cat.png", "images/potatoes.jpg", "images/50cent.png"];


//deze functie start wanneer de pagina geladen wordt
function start() {
    document.getElementById("cadeau").src = "images/getal10.jpg";

    nieuwTekst = document.getElementById("tekst");//tekst boven de tekstvakje
    userInput = document.getElementById("userInput");//tekstbox waar user in schrijft
    unoMas = document.getElementById("unoMas");//knop dat deze functie initieert herlaad

    unoMas.style.visibility = "hidden";// knop om nog een x te spelen word onzichtbaar. De knop herlaad de pagina

    antwoord = Number(Math.floor(Math.random() * 11));//antwoord word gegenereerd

    console.log("Het juiste antwoord is " +antwoord);// CHEAT<<<<<<<<<---------------------------

    nieuwTekst.innerHTML = "Raad het getal 0 - 10. Heb je hem goed dan krijg je een prijs.";

    pogingAantal = 0;//poging is 0, want user heeft nog geen poging gemaakt to het raden van het getal

    userInput.focus();//cursor gaat automatisch naar textbox
}// einde functie


//deze functie genereert een random cadeau
function cadeau () {
    var random = Math.floor(fotos.length * Math.random()) + 1;// toevalsgetal word gegenereert tussen tussen 1 en lengte van hoelang de array is

    var imgString = fotos[random -1];// haalt de foto van de random nummer

    document.getElementById("cadeau").src = imgString;//foto word zichtbaar in html
} // einde funtie


// deze functie checkt de input die de gebruiker geeft
function userAntwoord() {
    pogingAantal++;// Telt aantal pogingen bij elkaar op en:
    var response = "Poging " + pogingAantal + ". ";//maakt daar een mooie zin van zodat de gebruiker weet hoevaak hij heeft geraden

    var guess = Number(userInput.value);//veranderd de user input naar een number

    //if else statements die bepalen of de user goed heeft geraden
    if (guess < antwoord) {
        response += "Te laag! Probeer een hoger getal.";
    }
    else if (guess > antwoord) {
        response += "Te hoog! Probeer een lager getal.";
    }
    else if (guess !== antwoord) {
        response += "Dat is geen getal! Vul een getal in bijvoorbeeld '6'.";
        document.getElementById("cadeau").src = "images/facepalm.png";// Voor als je iets anders invult dan een nummer
    }
    else if (guess == antwoord) {
        if (pogingAantal == 1) {//speciale beloning als je in 1 x raad
            response += "WAUW! In 1 keer goed!";
            document.getElementById("cadeau").src = "images/happy.gif";
            unoMas.style.visibility = "visible";// knop word weer zichtbaar na juiste antwoord, gebruiker kan hem klikken om nog een x te spelen
        }
        else if(pogingAantal > 1) {
            response += "Hooray, je hebt het juiste getal geraden! hier is jou prijs!";
            cadeau();//cadeau wordt gegenereert
            unoMas.style.visibility = "visible";// knop word weer zichtbaar na juiste antwoord, gebruiker kan hem klikken om nog een x te spelen
    }
    }

    nieuwTekst.innerHTML = response;//nieuwTekst veranderd op basis van het antwoord + aantal pogingen

    userInput.focus();//cursor gaat automatisch naar textbox en:
    userInput.select();//textbox word geselecteerd zodat je gelijk kan typen
}// einde functie
