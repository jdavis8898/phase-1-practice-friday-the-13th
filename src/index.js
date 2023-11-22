const movieListElement = document.querySelector("#movie-list")
const detailImageElement = document.querySelector("div#movie-info img#detail-image")
const titleElement = document.querySelector("div#movie-info h1#title")
const yearReleasedElement = document.querySelector("div#movie-info h3#year-released")
const descriptionElement = document.querySelector("div#movie-info p#description")
const buttonWatchedElement = document.querySelector("div#movie-info button#watched")
const bloodAmountElement = document.querySelector("div#movie-info span#amount")
let currentMovie

function getMovies()
{
    fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movies => {
            
            createNavBar(movies)

            displayMovie(movies[0])

            toggleWatchedButton()
        })
}
function createNavBar (movies)
{
    movies.forEach(movie => {
        const navBarImageElement = document.createElement("img")
        navBarImageElement.src = movie.image
        movieListElement.appendChild(navBarImageElement)

        navBarImageElement.addEventListener("click", () => displayMovie(movie))
    })
}

function displayMovie(movie)
{
    currentMovie = movie

    detailImageElement.src = movie.image
    titleElement.innerText = movie.title
    yearReleasedElement.innerText = movie.release_year
    descriptionElement.innerText = movie.description
    buttonWatchedElement.innerText = movie.watched ? "Watched" : "Unwatched"
    bloodAmountElement.innerText = movie.blood_amount
}

function toggleWatchedButton()
{
    buttonWatchedElement.addEventListener("click", () => {
        currentMovie.watched = !currentMovie.watched
        buttonWatchedElement.innerText = currentMovie.watched ? "Watched" : "Unwatched"
    })
}

getMovies()