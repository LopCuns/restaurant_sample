import { h } from "../scripts/helpers.js"


function init(){
    const $platos = h.$('platos'),
    $menuBtn = h.$('menuBtn'),
    $menu = h.$('menu'),
    $body = document.body

    const toggleMenu = () => {
        h.toggle($menu,'ul--opened')
        h.toggle($body,'body--ul--opened')
    }
    h.ev($platos,'click',(e)=>{
        if(!e.target.dataset.open) return
        h.toggle(h.getQuery(e.target,'.carta__platos__opener'),'opener--opened')
        h.toggle(h.$(e.target.dataset.open),'recetas--opened')
    })

    h.ev($menuBtn,'click',(e)=>{
        toggleMenu()
    })

    h.ev($menu,'click',(e)=>{
        if(!e.target.classList.contains('nav__ul__li__a')) return
        toggleMenu()
    })

}

init()