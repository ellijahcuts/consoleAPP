"use strict"

const p = document.querySelectorAll('p')
console.log(p)


function loadScript (src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    document.body.append(script)
}

loadScript('js/test.js')
loadScript('js/Zada4i_dl9_Osnov.js')

