// função que faz a animação do scrol 
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((elements) => myObserver.observe(elements))


function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

var typed = new Typed(".auto-type", {
    strings: ["LÉO", " A FRONTEND DEVELOPER", "A VIDEO EDITOR"],
    typeSpeed: 110,
    backSpeed: 90,
    loop: true
})

const arrowImg = document.getElementById('arrow');
const themeSwitch = document.getElementById('chk');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        arrowImg.src = './assets/arrowUpWhite.png';
    } else {
        arrowImg.src = './assets/arrowUp.png';
    }
});