// hamburger menu

let sidemenu = document.querySelector('#sidemenu')

function openmenu() {
    sidemenu.style.right = '0'
}
function closemenu() {
    sidemenu.style.right = '-200px'
}

// about-me tabs
const tabLinks = document.querySelectorAll('.tab-links')
const tabContents = document.querySelectorAll('.tab-content')

function opentab(tabname, event) {
    for(const tabLink of tabLinks) {
        tabLink.classList.remove('active-link')
    }    
    for(const tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
    event.target.classList.add('active-link')
    document.querySelector(`#${tabname}`).classList.add('active-tab')
}

// copyright message
const currentYear = new Date().getFullYear()
const copyrightElement = document.querySelector('#copyright')
copyrightElement.textContent = `© ${currentYear} David Lorriman. All rights reserved.`