"use strict"

function first() {
    setTimeout(function () {
        console.log(1)
    },500)
}
function second() {
    console.log(2)

}

first()


function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`)
    callback()

}

learnJS("js",second)
