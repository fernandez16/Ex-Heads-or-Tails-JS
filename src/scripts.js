let flipButton = document.getElementById('flip')

flipButton.onclick = function () {
    let flip = Math.round(Math.random())
    const myHeading = document.getElementById('result')
    if (flip == 1) {
        myHeading.textContent = 'Heads!'
        console.log(flip)
        return
    }
    myHeading.textContent = 'Tails!'
    console.log(flip)
    return
}