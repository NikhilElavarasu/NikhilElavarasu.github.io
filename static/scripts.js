const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle('active')
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    } else {
        nav.removeAttribute("style");
    }
}

const email = document.getElementById('email');
const form = document.querySelector('form');
const errorElement = document.querySelector(".error");
form.addEventListener('submit', formValidation);

function formValidation(event) {
    let message = ""
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailFormat)) {
        alert("You will get updates of our product through mail");
    } else {
        message = "Please insert a valid email";
        event.preventDefault();
        errorElement.innerHTML = `<p>${message}</p>`
    }
}

const arrows = document.getElementsByClassName('arrow')
const testimonials = document.getElementsByClassName('testimonial')
let testimonial_page = Math.ceil(testimonials.length / 2);
let l = 0;
let movePer = 101;
let maxMove = 199;

let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
    movePer = 102;
    maxMove = 407;
}

let right_mover = () => {
    l = l + movePer;
    if (testimonials == 1) { l = 0; }
    for (const testimonial of testimonials) {
        if (l > maxMove) { l = l - movePer; }
        testimonial.style.left = '-' + l + '%';
    }

}
let left_mover = () => {
    l = l - movePer;
    if (l <= 0) { l = 0; }
    for (const testimonial of testimonials) {
        if (testimonial_page > 1) {
            testimonial.style.left = '-' + l + '%';
        }
    }
}
arrows[1].onclick = () => { right_mover(); }
arrows[0].onclick = () => { left_mover(); }