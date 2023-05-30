//-------MOBILE MENU---------------

const menu = document.querySelector(".menu-icon")
// selecting all elements to convert this to an iterable object
const icon = document.querySelectorAll('.icon')

//links menu 
const linksMenu = document.querySelector('#links-menu')

menu.addEventListener('click', () => {
    // add class to expand menu
    icon.forEach((el) => {
        el.classList.toggle('menu-expanded')
    }) 
          // add the navigation transition 
    linksMenu.classList.toggle('show-navigation')
})


