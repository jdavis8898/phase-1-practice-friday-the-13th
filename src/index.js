const titleElement = document.getElementById("title")
const yearReleasedElement = document.getElementById("year-released")
const descriptionElement = document.getElementById("description")
const movieListElement = document.getElementById("movie-list")
const detailImageElement = document.getElementById("detail-image")
const watchedElement = document.getElementById("watched")
const amountElement = document.getElementById("amount")
const bloodFormElement = document.getElementById("blood-form")
const bloodAmountElement = document.getElementById("blood-amount")

fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(movies => {
    movies.forEach(movie => {
        const imageElement = document.createElement("img")
        imageElement.src = movie.image
        movieListElement.appendChild(imageElement)
        imageElement.addEventListener("click", () => {displayMovie(movie)})
    })

    displayMovie(movies[0])
})

function displayMovie(movie)
{
    titleElement.textContent = movie.title
    yearReleasedElement.textContent = movie.release_year
    descriptionElement.textContent = movie.description
    detailImageElement.src = movie.image
    amountElement.textContent = movie.blood_amount

    if (movie.watched === true)
    {
        watchedElement.textContent = "Watched"
    }

    else
    {
        watchedElement.textContent = "Unwatched"
    } 
}

watchedElement.addEventListener("click", () => {
    if (watchedElement.textContent === "Watched")
    {
        watchedElement.textContent = "Unwatched"
    }

    else
    {
        watchedElement.textContent = "Watched"
    }
})

bloodFormElement.addEventListener("submit", (event) => {
    event.preventDefault()

    if (isNaN(Number(bloodAmountElement.value))) {
        alert("Error: That's NOT a number! Please try again.")
    }
    
    else {
        let newBloodAmount = Number(bloodAmountElement.value) + Number(amountElement.textContent)
        amountElement.textContent = newBloodAmount
        console.log(newBloodAmount)
    }

    bloodFormElement.reset()
})
