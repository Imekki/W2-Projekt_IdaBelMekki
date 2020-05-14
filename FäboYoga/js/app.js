
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
    })
}

navSlide();

/*//Variables
var i = 0;
var images = [];
var time = 4000;

//img
images[0] = 'img/buddha.jpg';
images[1] = 'img/Helgbo.jpg';

function pictureSlide() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("pictureSlide()", time);
}

window.onload = pictureSlide();*/