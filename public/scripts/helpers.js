export { h }

const h = {
    $: (id) => document.getElementById(id),
    ev: (el,evType,fn) => el.addEventListener(evType,fn),
    getQuery: (el,selector) => el.querySelector(selector),
    getAllQuery : (el,selector) => el.querySelectorAll(selector),
    toggle : (el,className) => el.classList.toggle(className)
}