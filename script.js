let btn = document.querySelector('#toggleNav')
let element = document.querySelector('#toggleClass')
btn.addEventListener('click', () => {
   element.classList.toggle('hidden')
})
