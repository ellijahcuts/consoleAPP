"use strict"

let numberOfFilms

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")
    while (numberOfFilms === "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")
    }
    console.log(numberOfFilms)
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let filmName = prompt("Как называется фильм который вы смотрели?", ""),
            filmScore = prompt("Какую бы оценку вы ему поставили", "")

        if (filmName != null && filmScore != null && filmName !== "" && filmScore !== "" && filmName.length < 50) {
            personalMovieDB.movies[filmName] = filmScore
        } else {
            i--
        }
    }
}

rememberMyFilms()

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Да вы братец мало фильмов смотрите")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Да вы милок обычный посетитель кинозала")
    } else if (personalMovieDB.count >= 30) {
        console.log("Мисье да вы киноман")
    } else {
        console.log("Ошибочка вышла")
    }
}

detectedPersonalLevel()

function writeYourFavoriteGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Какой ваш любимый жанр под номером ${i}`, "")
        if (genre != null && genre !== "" && genre.length < 50) {
            personalMovieDB.genres[i - 1] = genre
        } else {
            i--
        }
    }
}

writeYourFavoriteGenres()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    } else {
        console.log("Секретная информация")
    }
}

showMyDB(personalMovieDB.privat)
