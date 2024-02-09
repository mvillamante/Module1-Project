//loading page
document.addEventListener('DOMContentLoaded', function () {
    var vesperaText = document.querySelector('.loading-page');
    var loginContainer = document.querySelector('.box');

    vesperaText.addEventListener('transitionend', function () {
        document.querySelector('.loading-page').style.display = 'none';

        // Trigger the entry animation after loading page disappears
        loginContainer.style.display = 'block';
    });

    setTimeout(function () {
        vesperaText.classList.add('exit-animation');
    }, 2000);
});

//login page
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

function moveSlider() {
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
});

document.getElementById("clickable-text").addEventListener("click", function() {
    this.classList.toggle("clicked");
});