"use strict"


let firstFilmName = prompt("Один из последних просмотренных фильмов", "Название")
let firstFilmScore = +prompt("Какую оценку вы бы поставили этому фильму?", "от 1 до 10")
let secondFilmName = prompt("Еще один из последних просмотренных фильмов", "Название")
let secondFilmScore = +prompt("Какую оценку вы бы поставили этому фильму?", "от 1 до 10")

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "Ваш ответ")
console.log(numberOfFilms)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
personalMovieDB.movies[firstFilmName] = firstFilmScore
personalMovieDB.movies[secondFilmName] = secondFilmScore
console.log(personalMovieDB)

