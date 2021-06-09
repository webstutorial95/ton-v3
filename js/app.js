

const burger = document.getElementById('burger');
const divFull = document.getElementById('full-screen-id');
const closeBtn = document.getElementById('close-btn');

burger.addEventListener('click', () => {
    divFull.classList.toggle('full-screen');
    divFull.classList.toggle('nav-main');
    closeBtn.classList.toggle('fa-times');
    closeBtn.classList.toggle('fas');
});

