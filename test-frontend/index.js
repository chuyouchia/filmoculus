const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

console.log(canvas)

window.addEventListener('click', () => {
    console.log('clicked')
})