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



// lib for reveal when load

ScrollReveal({
    origin: 'left',
    distance:'30px', 
    duration: '200',
}).reveal(`
    nav,
    #form-user,
    main,
    #list,
    footer
`);



// on search add a basic effect using events
const searchBar = document.querySelector('#search')

searchBar.addEventListener('keydown', () => {
    searchBar.classList.add('loading-search')
    
})

searchBar.addEventListener('blur', () => {
    searchBar.classList.remove('loading-search')
})