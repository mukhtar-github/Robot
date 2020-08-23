document.addEventListener('DOMContentLoaded', () => {
    const eyes = document.querySelectorAll('.eye');
    const mask = document.querySelector('.mask');
    const torso = document.querySelector('.torso');
    const robot = document.querySelector('.robot');
    
    function changeEye() {
        eyes.forEach(eye => eye.classList.toggle('blue-eye'));
    }

    mask.addEventListener('click', changeEye);
});