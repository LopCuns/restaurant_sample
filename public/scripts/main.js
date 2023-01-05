import { h } from "../scripts/helpers.js"


function init(){
    const $platos = h.$('platos'),
    $menuBtn = h.$('menuBtn'),
    $menu = h.$('menu'),
    $body = document.body,
    $slides = h.$('slides')

    const toggleMenu = () => {
        h.toggle($menu,'ul--opened')
        h.toggle($body,'body--ul--opened')
    },
    menuMobile = (e) =>{
        if(!e.target.classList.contains('nav__ul__li__a')) return
            toggleMenu()
    },
    actualSlide = () => Number($slides.dataset.showing),
    updateSlide = () => {
        const newIndex = actualSlide() + 1
        $slides.dataset.showing = newIndex > 3?1:newIndex 
    },
    toggleSlides = () =>{
        h.toggle($slides,'slide--transition')
        const previousIndex = actualSlide()
        updateSlide()
        const actualIndex = actualSlide()
        h.toggleBetween(h.$(`slide${actualIndex}`),h.$(`slide${previousIndex}`),'slide--hidden')
        h.toggleBetween(h.$(`dot${actualIndex}`),h.$(`dot${previousIndex}`),'dot--actual')
    }

    

    h.ev($platos,'click',(e)=>{
        if(!e.target.dataset.open) return
        h.toggle(h.getQuery(e.target,'.carta__platos__opener'),'opener--opened')
        h.toggle(h.$(e.target.dataset.open),'recetas--opened')
    })

    h.ev($menuBtn,'click',(e)=>{
        toggleMenu()
    })

    h.ev(window,'resize',()=>{
        if(window.innerWidth < 1200){
            h.ev($menu,'click',menuMobile)
        }
        else{
            $menu.removeEventListener('click',menuMobile)
        }
    })
    
    h.getAllQuery(document,'[data-open]').forEach(el=>el.click())

    setInterval(()=>{

        toggleSlides()
    },6000)

}

init()