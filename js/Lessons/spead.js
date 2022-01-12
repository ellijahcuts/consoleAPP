"use string"


let a = 10
let b = a
b = b + 5
console.log(b)
console.log(a)

const obj = {
    a: 5,
    b: 1
}
const copy = obj
copy.a = 10
console.log(copy)
console.log(obj)


function copyTwo(mo) {
    let objCopy = {}
    let key
    for (key in mo) {
        objCopy[key] = mo[key]
    }
    return objCopy
}

const num = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 1
    }
}

const newNum = copyTwo(num)
newNum.a = 10
newNum.c.y = 10
console.log(newNum)
console.log(num)


const objectNew = {
    d: 18,
    z: 22
}

const clone = Object.assign({}, objectNew)

clone.d = 20
console.log(objectNew)
console.log(clone)


const array = ['a', 'b', 'c']
const newArray = array.slice()

newArray[1] = 'sasatt'
console.log(array)
console.log(newArray)


//новый стандарт клонирования

const video = ['hdrezka', 'kinogo', 'youtube']
const blogs = ['vk', 'instagram', 'twitter']
const internet = [...video, ...blogs, 'odk','belamova']
console.log(internet)

function log (a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}

const numnum = [2,9,8]
log(...numnum)

const arrrr = ["a","b"]
const newArrrrr = [...arrrr]


const numObj = {
    one:1,
    two:2
}

const newObjNum= {...numObj}
console.log(newObjNum)
