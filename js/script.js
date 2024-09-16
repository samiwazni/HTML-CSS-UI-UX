document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
});