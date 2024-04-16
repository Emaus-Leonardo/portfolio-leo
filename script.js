function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

var typed = new Typed(".auto-type", {
    strings: ["LÉO", " A FRONT-END DEVELOPER", "A VIDEO EDITOR"],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true
})
