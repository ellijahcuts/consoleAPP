'use strict';

const box = document.getElementById("box"),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapped = document.querySelector('.wrapper')
/*
box.style.backgroundColor = "gold"
box.style.width = "500px"
*/

const div = document.createElement('div')
//const text = document.createTextNode('tut.by')
div.classList.add('black')
buttons.append(div)
/*buttons.remove()
buttons[2].style.borderRadius = '80%'
circles[1].style.backgroundColor = 'green'
box.style.cssText = 'background-color: green; width: 900px; border-radius: 50%'
for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor ='gold'
}
hearts.forEach(item=>{
    item.style.backgroundColor = "cyan"
})
hearts[1].before(div)
circles[1].remove()
hearts[2].replaceWith(box)
wrapped.append(div)
wrapped.appendChild(div)
wrapped.insertBefore(div,hearts[1])*!/
wrapped.replaceChild(circles[0],hearts[0])*!/

div.innerHTML="<h1>Hello world</h1>"
div.textContent="HELLO"

div.insertAdjacentHTML('afterbegin', "<h2>Pes</h2>")*/
