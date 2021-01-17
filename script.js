let btn = document.querySelector('#toggleNav')
let element = document.querySelector('#toggleClass')
btn.addEventListener('click', () => {
   element.classList.toggle('hidden')
})

var pageContent = document.getElementById('content'),
   pagecopy = pageContent.cloneNode(true),
   blurryContent = document.getElementById('blurryscroll')
blurryContent.appendChild(pagecopy)
window.onscroll = function () {
   blurryContent.scrollTop = window.pageYOffset
}
