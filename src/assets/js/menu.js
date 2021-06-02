const $burger = document.querySelector('.burger');
const $dots = document.querySelector('.dots');
const $body = document.querySelector('body');

const $category = document.getElementById('category-item')
const $menu = document.getElementById('main-menu')

document.addEventListener('click', (e) => {
    const target = e.target

    clickHandler($body, $burger, 'show-leftbar')
    clickHandler($body, $dots, 'show-rightbar')
    clickHandler($menu, $category, 'active')

    function clickHandler($item, $bar, toggleClass) {
        if($item.classList.contains(toggleClass)) {
            e.preventDefault();
            $item.classList.remove(toggleClass);
        }else if(target === $bar || target.parentNode === $bar) {
            e.preventDefault();
            $item.classList.toggle(toggleClass);
        }
    }

}, true)