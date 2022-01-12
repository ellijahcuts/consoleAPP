"use strict"

const arr = [1, 2, 3, 99, 10, 50, 9, 7, 12, 19]

let sortNum =(a,b)=>{
    return a - b
}
arr.sort(sortNum)
console.log(arr)

/*arr.pop()
arr.push(92, 11, 12)
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let value of arr){
    console.log(value)
}*/

arr.forEach(function (i,n,id,){
    console.log(`${n}: ${i} внутри масива ${id}`)
})

/*
const str = prompt("че хочу?","")
const products = str.split(",")
*/
