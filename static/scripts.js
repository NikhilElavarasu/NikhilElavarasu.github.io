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

const movButtonRight = document.getElementById('mov-button-right');
const movButtonLeft = document.getElementById('mov-button-left');
const testimonials = document.getElementsByClassName('testimonial');
let testimonial_page = Math.ceil(testimonials.length / 2);
let l = 101;
let movePer = 101;
let maxMove = 199;

let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
    movePer = 101;
    maxMove = 400;
}

let right_mover = () => {
    if (movButtonLeft.getAttribute('disabled') == 'true')
        movButtonLeft.removeAttribute('disabled');

    for (const testimonial of testimonials) {
        if (l > maxMove) {
            break;
        }
        testimonial.style.left = '-' + l + '%';
    }

    l = l + movePer;
    if (l > maxMove) {
        movButtonRight.setAttribute("disabled", "true");
        l = l - movePer;
        return
    }
}

let left_mover = () => {
    l = l - movePer;
    if (l <= 0) {
        l = 0;
    }

    if (movButtonRight.getAttribute('disabled') == 'true')
        movButtonRight.removeAttribute('disabled')

    for (const testimonial of testimonials) {
        if (testimonial_page > 1) {
            testimonial.style.left = '-' + l + '%';
        }
    }

    if (l < movePer) {
        movButtonLeft.setAttribute('disabled', 'true')
        l = l + movePer;
    }
}

movButtonRight.onclick = () => {
    if (l < maxMove) {
        right_mover();
    }
}
movButtonLeft.onclick = () => {
    left_mover();
}