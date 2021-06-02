const breadcrumb = document.querySelector('.breadcrumb')

breadcrumb.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) {
        e.preventDefault()
    }
})