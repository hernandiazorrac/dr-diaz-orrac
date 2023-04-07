// SCROLL TO SECTION

const equipoSection = document.getElementById('inicio')

document.querySelector('a[href="#inicio"]').addEventListener('click', (e) => {e.preventDefault})

equipoSection.scrollIntoView({behavior: "smooth"})


// SHRINK NAVBAR ON SCROLL

window.addEventListener('scroll', () => {
    let navbar = document.getElementById('navbar')

    if (window.scrollY > 500){
        navbar.classList.add('shrink')
    } else {
        navbar.classList.remove('shrink')
    }
})