function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

var typed = new Typed(".auto-type", {
    strings: ["LÉO", " A FRONTEND <br/> DEVELOPER", "A VIDEO EDITOR"],
    typeSpeed: 110,
    backSpeed: 90,
    loop: true
})
