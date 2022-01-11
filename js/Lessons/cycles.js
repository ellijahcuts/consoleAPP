"use strict"

let num = 50;

while (num <= 55) {
    console.log(num)
    num++
}

do {
    console.log(num)
    num++
}
while (num <= 55)

for (let i = 1; i < 10; i++){
    if (i === 6){
        /*break*/
        continue
    }
    console.log(i)
}
// Решения к заданию номер 2
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
