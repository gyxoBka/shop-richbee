let tab = document.getElementById('tabs')
let tabLinks = tabs.querySelectorAll('.description__link')
let items = tabs.querySelectorAll('.description__item')

if(tabLinks.length > 0) {
    tabLinks[0].classList.add('active')
    items[0].classList.add('active')
}

for(let i = 0; i < tabLinks.length; i++) {
	tabLinks[i].addEventListener('click', (e) => {
        e.preventDefault()
		switchTab([tabLinks, items], i)
	})
}

function switchTab(tabs, i) {
	tabs.forEach( tab => {
		tab.forEach( i => {
            i.classList.remove('active')
        })

		tab[i].classList.add('active')
	})
}