/* console.log(a)
console.log(c) */

/* Primitívek:

STRING: */

/* console.log("HelloWorld!")               //backtick-el lehet sort törni, a többivel nem!
console.log('HelloWorld!')
console.log(`Hello
World!`) */

/* NUMBER: */

/* console.log(typeof NaN)      // Not A Number
console.log(typeof 2)           // "typeof" -> kiírja a típusát 
console.log(0 / 0)              // érvénytelen matematikai műveleteknél is NaN az eredmény
console.log(2.14)  */           // tört számok is vannak, de csak "pontal"

/* BOULEAN: */

/* console.log(true)               // igaz vagy hamis álítások
console.log(false) */

/* EGYÉB: */

/* console.log(undefined)             // "undefined" érték nélküli-t jelenti, míg a "null" valamilyen dolog (főleg objektum) nem található
console.log(null)                  // megpróbál object-et csinálni, de nem tudta létrehozni, mert hiányzott, ezért "null"...

console.log(typeof undefined)      // típusa undefined, míg a null object
console.log(typeof null)  */ 


/* Adatstruktúrák:

ARRAY:



OBJECT: */

/* console.log({
    "title": "Start coding",
    "type": "solo",
    "difficulty": 4.1,
    "usefullness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {"title": "Bank accounts", "description": "Model 3 bank accounts"},
        {"title": "100 doors", "description": "There are 100 doors"},
        {"title": "Word filter", "description": "Write a function"}
    ]
})   */


/* Változók: */

// a jS a változók esetében 2 lépcsőfok van: első:  .....    , második: inicializálás : itt van, és van értéke
                                            


/* var a = "Hello1"         // valahol létrejön, kiszedi, és a -1ik sorba rendezi, és lefoglalja és a 0-ik sorba viszi (értéket is ad neki)       
let b = "Hello2"
const c = "Hello3" */


/* console.log(a)
console.log(b)
console.log(c) */


/* Függvények: */

/* function d() {

    if (1 + 1 === 2) {
    }

    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}
d() */


/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e * 2
console.log(e) */
/* 
function multiplyByTwo(num) {
    console.log(num)
    return num * 2                
}

let f = multiplyByTwo(1)

console.log(f)
console.log(multiplyByTwo(1))
console.log(num)

 */
/* Metódusok: */
//objektumban elmentett függvények, de úgy viselkednek mint egy kulcs..ergó a '.'-al tudunk benne lépkedni.
// myMethod: = kulcs
// function(){} = érték

/* let g = {
    myMethod: function (){
        console.log("Hello");
    }
}
g.myMethod()



let window = {
    addEventListener: function (eventName, eventFunction){
        if ( eventName === "load" ) {
            eventFunction()
        }
    }
}
window.addEventListener("load", loadEvent)

let h = {
    anotherMethod: function(text){
        return `You sent this the following argument to this method: ${text}`   // ${text} helyére fog kerülni amit megadunk 
    }
}
let i = h.anotherMethod("argument")

console.log(i)
console.log(h.anotherMethod("another argument")) */                                //"h.anotherMethod = i, ezért kiválthatjuk őket"

/* ============================= ÚJ ÓRA 02.16.2022 ============================= */



/* ========== STRINGEK ÖSSZEHASONLÍTÁSA ========== */

/* 
//meghatározzuk "Mikkamakka"-t mint egy "myString" nevű változó
let myString = "Mikkamakka";

//egyenlővé tesszük a másik "mySecondString" nevű változóval
let mySecondString = myString;

//kiírja, hogy kül-kül mind2 értéke "Mikkamakka"
console.log(myString);
console.log(mySecondString);

//kiirja, hogy igaz-e az állítás (esetünkben "true" mert mind2 változónak ugyan az az értéke)
console.log(myString === mySecondString);

//megadunk egy "myThirdString" nevű változót, szintén "Mikkamakka" értékkel
let myThirdString = "Mikkamakka";

//megnézzük, hogy a két változónknak (myString és myThirdString) ugyan az-e az értéke (úgy, hogy nem tettük egyenlővé, hanem mind2-nek ugyanazt adtuk meg)
console.log(myString === myThirdString);

//JavaScript összehasonlítás ---> A memóriában tárolt karaktertáblában végigmegy egyesével a betűkön, és egyesével megnézi, hogy ugyanazok-e az értékei
 */


/* ========== OBJECTEK ÖSSZEHASONLÍTÁSA ========== */

/* 
//a "myObject"-en belüli "myString" nem tud összeakadni a "myObject"-en kívüli "myString"-el, mert objekten belül van, így más scope. Illetve ezt úgy kell írni, mintha egy kulcs-érték (key-value) pár lenne -->"kulcs": "érték"
let myObject = {
    myString: "Mikkamakka"
}

//létrehozunk egy "mySecondObject" változót, amit egyenlővé teszünk a "myObject" változóval
let mySecondObject = myObject

//összehasonlítjuk a két változót -> "true" lesz, mivel egyenlővé tettük őket
console.log(myObject === mySecondObject);

//megváltoztatjuk a "mySecondObject"-en belüli "myString" kulcs értékét, amivel megváltozik a "myObject" értéke is (mivel egyenlővé tettük őket). --> Olyan mintha egy elemnek (kulcsnak) két különböző nevet adnánk.
mySecondObject.myString = "Dömdödöm"

//leellenőzizzük, hogy tényleg megváltozott a "myObject"-en belüli "myString" kulcs értéke is.
console.log(myObject.myString)

//létrehozunk egy "myThirdObject" változót, melynek "myString" kulcsának értéke pontosan ugyan az mint a "myObject"-é.
let myThirdObject = {
    myString: "Mikkamakka"
}

//összehasonlítjuk a "myObject" és a "myThirdObject" változók értékét -> "false" lesz (a primitívek (string, number...stb), és az object-ek máshogy viselkednek összehasonlításkor, mert memóriaszinten máshol tárolódnak el. Ezek külön objektumokat hoznak létre, melyek nem lesznek egyenlőek.
console.log(myObject === myThirdObject);
 */


/* ========== üres STRINGEK és üres OBJECT-ek összehasonlítása ========== */

/* 
//két üres String összehasonlítás -> "true" lesz
console.log("" === "")

//két üres Object összehasonlítás -> "false" lesz, mert amint létrehozzuk az objektumot, egyből egy új objektumot hozunk létre ergo, teljesen különböző lesz. 
console.log({} === {})
 */

//stringek közt csak több neve lesz, objektumnál új objektum jön létre más névvel.



/* ========== OBJEKTUM MÁSOLÁSA ========== */

/* 
//létrehotunk egy "myFourthObject" változót, amibe lemásoljuk a "myObject" változót -->"{...name}" = objektum másolása....Nested objektumok így nem másolhatóak!
let myFourthObject = {...myObject}

//a "myFourthObject" változón belüli "myString" kulcsnak megváltoztatjuk az értékét "Vacskamati"-ra
myFourthObject.myString = "Vacskamati"

//ellenőrizzük, hogy a "myFourthObject" változón belüli "myString" kulcsnak az értéke valóban "Vacskamati"-ra változott
console.log(myFourthObject.myString)
 */


/* ========== WEB API FELDOLGOZÁS========== */

/* 
//írunk egy "loadEvent" nevű függvényt
function loadEvent() {

//a változóban lévő függvény, és a sima kiírt függvény közt annyi a kül, hogy a js a függvényeket elérhetővé teszik (0-ik sor)...Ezért ha függvényként hozzuk látre, akkor elötte is tudjuk használni, ha változóban, akkor csak utána.

    // létrehozunk egy "rootElement" változót, amely a "document" objektumon belül-i "root" ID-jü elemet tartalmazza
    let rootElement = document.getElementById("root")

    //létrehozunk egy "card" változót, amely egy funkciót tartalmaz aminek a paramétere "movieRecieved". Ez a funkció "return"-öl egy egy stringet `két backtick között` (azért kell backtick, mert így sorközzel el lehet választani....a '', illetve "" jelölés nem választható el sorközzel)
    let card = function(movieRecieved){

        // a "${ide kerül amit szeretnénk beleírni}" -t használva tudunk elérni különböző kulcs-érték (key-value) párokat. -->a "movieRecieved" egy paraméter amit a funkciónál megadtunk, ez bármi lehet a lényeg, hogy mindig ugyanarra hivatkozzunk
        return `
        <div class="card"> 
        <h2>${movieRecieved.title}</h2>
        <div class="time">${movieRecieved.year}</div>
        <div Class="rate">${movieRecieved.rate}</div>
        </div>
        `
    };

    //DIREKT KÓDBA ÍRT OBJEKTUM:

    //a "rootElement"-en belül létrehozunk egy ÚJ HTML elemet (insertAdjascentHTML) --> ennek a parancsnak kell adni egy pozíciót ("beforeend"), illetve egy text-et (jelen esetben ez a "card" funkció, ami egy funkciót tartalmaz, mely létrehoz egy stringet, és a stringen belüli "${.title, .year, .rate}"-t, az itt objektumként megadott 3 kulcs (title, year, rate) értékével fogja kitölteni
    rootElement.insertAdjacentHTML("beforeend", card({
        "title": "Moulin Rouge",
        "year": 2000,
        "rate": 9.9
    }));
    
    //VÁLTOZÓBAN MENTETT OBJEKTUM

    //létrehozunk egy "actuallyFavouriteMovie" változót, mely egy 3 kulcs-érték párral (title, year, rate) rendelkező objektum
    let actuallyFavouriteMovie = {
        "title": "Eternal Sunshine of a spotless mind",
        "year": 2004,
        "rate": 9.8
    }

    //a "rootElement"-en belül létrehozunk egy ÚJ HTML elemet (insertAdjascentHTML), és a "card" funkciónak megadjuk az "actuallyFavouriteMovie" változót mint paraméter, mely tartalmazza a 3 kulcs-érték párt, amivel "card"-on belőli string-et kitölti --> a "${movieRecieved.title}" -ből lesz gyakorlatilag "${actuallyFavouriteMovie.title}"  --> "card(actuallyFavouriteMovie)"-ben az "actuallyFavouriteMovie" az a "card" funkció paramétere, aminek a funkció meghatározásakor "movieRecieved" nevet adtunk
    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavouriteMovie));

    //a "rootElement"-en belül létrehozunk egy ÚJ HTML elemet (insertAdjascentHTML), és a "card" funkcióba a "movies" (data.js fájlban lévő const változó neve) adatbázis [0]-ik tömbjében (ez az első adat ami van, csak 0-tól kezdődik a számozás) lévő objektum kulcs-érték párjának értékeit íratjuk ki.
    rootElement.insertAdjacentHTML("beforeend", card(movies[0]));



    //létrehozunk egy "for" ciklust, melyben "movieSend" a változó (mi adjuk meg a nevet, hogy tudjunk rá hivatkozni), a "movies" az objekt amiben vannak az adatok --> a "for" függvény folyamatosan átmegy az adatokon amit megadunk neki (jelenleg ez a "movies" ami a data.js fájlban lévő adatbázis), és ezt egy adott változóhoz rendeli ami jelen esetben a "movieSend"
    for (const movieSend of movies) {

        //a "document" objektumon belüli "root" ID-jü elemhez adjon hozzá egy HTML elementet, mely az "insertAdjacentHTML" ()-en belül megadott pozícióban legyen, és az ott ``(backtick)-ek közé írt text-et tartalmazza
        document.getElementById("root").insertAdjacentHTML("beforeend", `
        <div class="title"> ${movie.title} </div>
        `),

        //a "root" element-be hozzon létre egy HTML elemet, mely az "insertAdjacentHTML" ()-en belül megadott pozícióban legyen, és a "card" funkció "${}" értékeit töltse ki a "movieSend" paraméterként megadott "for" függvény értékeivel.
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    }
}

//ha egy adott függvényt csak 1x használunk, akkor nem muszáj nevet adni nekipl, hanem írhatjuk magát a funkciót is (jelen esetben a "loadEvent" helyett írjuk a ", function() {...});")
window.addEventListener("load", function(){
console.log("Hello")
});
 */

/* ============================= ÚJ ÓRA 02.17.2022 ============================= */


/* 
function loadEvent() {

    let rootElement = document.getElementById("root");

    let card2 = function(title, year, rate) { */
        //ha egy return-t if-be tesszük, akkor ha a feltétel nem teljesül, akkor undefined lesz (mert a függvény mindig returnol valamit) -->helyette a forciklusba tesszük
        /* if (year >= 2000) { */

/*             return `
            <div class="card"> 
                <h2>${title}</h2>
                <div class="time">${year}</div>
                <div Class="rate">${rate}</div>
            </div>
            `; */
        /* } else {
            return "";
        }*/
    //} 
/* 
    let renderAllCardElements = function(cardsArray) {
        let renderedCardList = "";

        for (const loop of cardsArray) {

            renderedCardList.push(loop); */
        //}
        //"for" ciklus ami végigmegy a "cardsArray"-en, mely a paraméter
        //minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet, a megfelelő div card-bann
        //returnöli az elkészült elemekkel feltöltött cardList-et
    //}

    //a movieSend az a movies lesz, így ha movieSend.year-t írok az oylan mintha movies.year-t írnék

    //movies.sort(function(a, b){return a.year - b.year})
/* 
    let newGoodMovies = [];

    for (const movieSend of movies) { */
        
        /* let newerThan2000 = false;

        if (movieSend.year > 2000) {
            newerThan2000 = true;
        }
        if (newerThan2000) {
            rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
        } */
        //let floorRate = Math.floor(movieSend.rate);

/*         if (movieSend.year > 2000 && movieSend.rate >= 8) {
            //rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate));
            newGoodMovies.push(movieSend);
        }
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))

    console.log(newGoodMovies);
}

window.addEventListener("load", loadEvent); */



function loadEvent() {

    let rootElement = document.getElementById("root");
    
    let card2 = function(title, year, rate) {
            return `
            <div class="card"> 
                <h2>${title}</h2>
                <div class="time">${year}</div>
                <div Class="rate">${rate}</div>
            </div>
            `;
    } 

    let renderAllCardElements = function(incomingMoviesArray) {
        let renderedCardList = `<div class="cards">`;

        //"for" ciklus ami végigmegy a "cardsArray"-en, mely a paraméter
        for (const incomingMovie of incomingMoviesArray) {
            //minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet, a megfelelő div card-bann
            
            /* renderedCardList += `
            <div class="card"> 
                <h2>${incomingMovie.title}</h2>
                <div class="time">${incomingMovie.year}</div>
                <div Class="rate">${incomingMovie.rate}</div>
            </div>
            ` */

            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate);
        }
        renderedCardList += `</div>`;
        console.log(renderedCardList);
        //returnöli az elkészült elemekkel feltöltött cardList-et
        return renderedCardList
    }

    let newGoodMovies = [];

    for (const movieSend of movies) {
        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
        }
    }

    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))

}

window.addEventListener("load", loadEvent);