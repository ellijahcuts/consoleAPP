"use strict"

const btn = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay=document.querySelector('overlay')

/*
btn.onclick = () => {
    alert('Click')
}
btn.onclick = () => {
    alert('Second Click')
}
*/
let i = 0
const del = (e)=>{
    /*e.target.remove()*/
    console.log(e.currentTarget)
    console.log(e.type)
    /*i++
    if(i===5){
        btn.removeEventListener('click', del)
    }*/
}

/*
btn.addEventListener('click', del)
overlay.addEventListener('click', del)
*/

btns.forEach(i=>{
    i.addEventListener("click", del, {once:true})
})

const link = document.querySelector('a')
link.addEventListener('click',  (event)=>{
    event.preventDefault();
    console.log(event.target)
})
