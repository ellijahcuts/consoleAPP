"use string"


let str = "some"
let strObj = new String(str)
console.log(typeof (str))
console.log(typeof (strObj))

let strUp = str.toUpperCase()
console.log(strUp)


const soldier = {
    health: 500,
    armor: 100,
    sayHello:function (){
        console.log("hello")
    }
}
const john = Object.create(soldier)
/*const john = {
    health: 100
}*/
Object.setPrototypeOf(john,soldier)
/*john.__proto__ = soldier*/

console.log(john.armor)
john.sayHello()

