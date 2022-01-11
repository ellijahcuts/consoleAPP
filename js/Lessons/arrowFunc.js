"use strict"
let num = 20

function showFirstMessage(t) {
    console.log(t)
    num = 10
}

showFirstMessage('а ты пес');

function calc(a,b){
    return (a+b)
}

console.log(calc(4,5))

function ret(){
    let num = 50
    return num
}

const anum = ret()
console.log(anum)
