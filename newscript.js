
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
        let renderedCardList = "";

        //"for" ciklus ami végigmegy a "cardsArray"-en, mely a paraméter
        for (const incomingMovie of incomingMoviesArray) {
            //minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet, a megfelelő div card-bann
            renderedCardList += `
            <div class="card"> 
                <h2>${incomingMovie.title}</h2>
                <div class="time">${incomingMovie.year}</div>
                <div Class="rate">${incomingMovie.rate}</div>
            </div>
            `
        }
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