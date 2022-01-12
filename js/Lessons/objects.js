"use strict"

const options = {
    name: "test",
    width: 1920,
    height: 1280,
    colors: {
        border: 'black',
        background: "yellow"
    },
    makeTest: function () {
        console.log(Object.keys(options).length)
    }
}
options.makeTest()

const {border, background} = options.colors
console.log(border)
console.log(background)

/*console.log(options.name)
delete options.name
console.log(options)*/

/*
let counter = 0
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
            counter++
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
        counter++
    }
}
console.log(counter)
*/


