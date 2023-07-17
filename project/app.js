let button = document.querySelector('.button')
let box = document.querySelector('body .container div')

button.addEventListener('click', () =>
{
    box.style.animation = "rotate 10s forwards"
    button.style.visibility = "hidden"
    setTimeout(() =>
    {
        box.style.animation = ""
        button.style.visibility = "visible"
    },10000)
})