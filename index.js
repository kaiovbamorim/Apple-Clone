const button = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const spanTopo = document.querySelectorAll('.btn-menu span');
const IconSacola = document.querySelector('.svg-sacola');
const sacola = document.querySelector('.sacola')
const main = document.querySelector('main')
const setaSacola = document.querySelector('.seta-sacola');
const removeSacola = document.querySelector('.remove-sacola')

const header = document.querySelector('header');

button.addEventListener('click', () => {
    menu.classList.toggle('active');

    spanTopo[0].classList.toggle('span-topo-active');

    spanTopo[1].classList.toggle('span-bottom-active');

    IconSacola.classList.toggle('sacola-opacity');

    header.classList.toggle('header-active');

    sacola.classList.remove('sacola-active');
    setaSacola.classList.remove('seta-active');
})
IconSacola.addEventListener('click', () => {
    sacola.classList.toggle('sacola-active');
    setaSacola.classList.toggle('seta-active')
})
main.addEventListener('click', () => {
    sacola.classList.remove('sacola-active');
    setaSacola.classList.remove('seta-active');
})
removeSacola.addEventListener('click', () => {
    sacola.classList.remove('sacola-active');
    setaSacola.classList.remove('seta-active');
})