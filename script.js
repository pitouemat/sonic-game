const sonic = document.querySelector('.sonic')
const enemy  = document.querySelector('.enemy') 
const jump = () => {
    sonic.classList.add('jump')

    setTimeout( ()=>{
        sonic.classList.remove('jump')
    },800)
}
const loop = setInterval(() => {
    const enemyPosition = enemy.offsetLeft
    const sonicPosition = Number(window.getComputedStyle(sonic).bottom.replace("px", ""))
    console.log(sonicPosition)

    if (enemyPosition <=90 && enemyPosition > 0 && sonicPosition < 40) {
        enemy.style.animation = "none"
        enemy.style.left = `${enemyPosition}px`

        sonic.animation  = "none"
        sonic.style.left = `${sonicPosition}px`

        sonic.src = 'imgs/end.png'
        sonic.style.width = "75px"

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump);

