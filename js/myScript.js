"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "")
        while (personalMovieDB.count === "" || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "")
        }
        console.log(personalMovieDB.count)
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            let filmName = prompt("Как называется фильм который вы смотрели?", ""),
                filmScore = prompt("Какую бы оценку вы ему поставили", "")

            if (filmName != null && filmScore != null && filmName !== "" && filmScore !== "" && filmName.length < 50) {
                personalMovieDB.movies[filmName] = filmScore
            } else {
                i--
            }
        }
    },
    detectedPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Да вы братец мало фильмов смотрите")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Да вы милок обычный посетитель кинозала")
        } else if (personalMovieDB.count >= 30) {
            console.log("Мисье да вы киноман")
        } else {
            console.log("Ошибочка вышла")
        }
    },
    writeYourFavoriteGenres: () => {
        for (let i=1; i <= 3; i++) {
            let genre = prompt(`Какой ваш любимый жанр под номером ${i}`, "")
            if (genre != null && genre !== "" && genre.length < 50) {
                personalMovieDB.genres[i - 1] = genre
            } else {
                i--
            }
        }
        personalMovieDB.genres.forEach(function (name, num) {
            console.log(`Любимый жанр № ${num+1} - это ${name}`)
        })
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB)
        } else {
            console.log("Секретная информация")
        }
    },
    toogleVisibleMyDB: (toogle) => {
        if (toogle) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    }
}

personalMovieDB.writeYourFavoriteGenres()
console.log(personalMovieDB)

