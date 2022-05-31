let header = document.querySelector('.header');
let navbar = document.querySelector('.navbar');
let bars = document.getElementById('menu-bar');
let appoint = document.querySelector('.btn')

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

bars.addEventListener('click', () => {
    bars.style.color = 'black';
})

appoint.addEventListener('click', () => {
    appoint.style.backgroundColor = 'black';
    setTimeout(() => {
        appoint.style.backgroundColor = 'rgb(13, 73, 122)'
    }, 2000);
})