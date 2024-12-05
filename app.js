const myButton = document.getElementById('scroll-btn')


const cursorDot = document.getElementById('curser-dot')
const cursorOutline = document.getElementById('curser-outline')


const toggleBtn = document.getElementById('toggle_btn')
const sideBar = document.getElementById('side-bar')





toggleBtn.addEventListener('click', () => {
    console.log('ahmed')

    sideBar.classList.toggle('active')


})





window.addEventListener('mousemove', (e) => {
    const posX = e.clientX
    const posY = e.clientY
    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`


    cursorOutline.style.left = `${posX}px`
    cursorOutline.style.top = `${posY}px`


    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" })

})

myButton.addEventListener('click', () => {
    document.body.scrollTop = 547
    document.documentElement.scrollTop = 547
})