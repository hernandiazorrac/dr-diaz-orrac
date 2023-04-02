const equipoSection = document.getElementById('equipo')
const contactButton = document.getElementById('contactBtn')

document.querySelector('a[href="#equipo"]').addEventListener('click', (e) => {e.preventDefault})
document.querySelector('a[href="#contactBtn"]').addEventListener('click', (e) => {e.preventDefault})

equipoSection.scrollIntoView({behavior: "smooth"})
contactButton.scrollIntoView({behavior: "smooth"})