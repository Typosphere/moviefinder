//posters & links toevoegen aan de DOM
const movieList = document.querySelector(".movies-list");
const addMoviesToDOM = (array) => array.forEach(movie => {
    const newLi = document.createElement("li");
    const imdbLink = document.createElement('a');
    const poster = document.createElement("img");
    imdbLink.target = "_blank";
    imdbLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    poster.src = movie.Poster;
    newLi.appendChild(imdbLink).appendChild(poster);
    movieList.appendChild(newLi);
})
addMoviesToDOM(movies)

// filters (werken):
const newMovies = movies.filter(movie => movie.Year > 2013);
const filterByTitle = (query) => movies.filter(movie => movie.Title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

// change statement on radio buttons
const radioButtons = document.querySelectorAll('input[type=radio][name="film-filter"]')
const radioChange = radioButtons.forEach(radio => radio.addEventListener("change", () => {
    if (radio.value === "new") {
        movieList.innerHTML = "";
        addMoviesToDOM(newMovies)
    }
    else if (radio.value === "all") {
        movieList.innerHTML = "";
        addMoviesToDOM(movies)
    }
    else{
        movieList.innerHTML = "";
        addMoviesToDOM(filterByTitle(radio.value))
    }
}))
    
//zoekbalk
const searchButton = document.querySelector("#search-button")
const inputField = document.querySelector("#input-field")
const respondToSearch = () => {
    const searchValue = inputField.value;
    movieList.innerHTML = "";
    addMoviesToDOM(filterByTitle(searchValue))
}
searchButton.addEventListener("click", () => {
    respondToSearch()
})
inputField.addEventListener("keypress", () => {
    if (event.keyCode === 13) {
        respondToSearch()
    }
})