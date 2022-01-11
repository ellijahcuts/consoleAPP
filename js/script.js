"use strict"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "Ваш ответ")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    let filmName = prompt("Как называется фильм который вы смотрели?", ""),
        filmScore = prompt("Какую бы оценку вы ему поставили", "")

    if (filmName != null && filmScore != null && filmName !== "" && filmScore !== "" && filmName.length < 50) {
        personalMovieDB.movies[filmName] = filmScore
    } else {
        i--
    }
}

//Решение do while
/*let i = 0
do {
    let filmName = prompt("Как называется фильм который вы смотрели?", ""),
        filmScore = prompt("Какую бы оценку вы ему поставили", "")
    i++
    if (filmName != null && filmScore != null && filmName !== "" && filmScore !== "" && filmName.length < 50) {
        console.log('done')
        personalMovieDB.movies[filmName] = filmScore
    } else {
        console.log('error')
        i--
    }
} while (i < 2)*/

//Решение while
/*let i = 0
while (i < 2) {
    let filmName = prompt("Как называется фильм который вы смотрели?", ""),
        filmScore = prompt("Какую бы оценку вы ему поставили", "")
    i++
    if (filmName != null && filmScore != null && filmName !== "" && filmScore !== "" && filmName.length < 50) {
        console.log('done')
        personalMovieDB.movies[filmName] = filmScore
    } else {
        console.log('error')
        i--
    }
}*/

if (personalMovieDB.count < 10) {
    console.log("Да вы братец мало фильмов смотрите")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Да вы милок обычный посетитель кинозала")
} else if (personalMovieDB.count >= 30) {
    console.log("Мисье да вы киноман")
} else {
    console.log("Ошибочка вышла")
}


console.log(personalMovieDB.movies)

