const hamburger = document.getElementById('hamburger')

const nav = document.getElementById('menu')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show')
})