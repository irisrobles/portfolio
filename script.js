const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

const typewriterText = document.querySelector('.typewriter-text');
const textArray = typewriterText.innerHTML.split('');
typewriterText.innerHTML = '';

let i = 0;
const typeWriter = () => {
    if (i < textArray.length) {
        typewriterText.innerHTML += textArray[i];
        i++;
        setTimeout(typeWriter, 100);
    }
};

window.onload = typeWriter;
