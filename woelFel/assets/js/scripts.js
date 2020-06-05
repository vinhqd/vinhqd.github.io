const toggle = document.querySelector('.toggle__checkbox');
const toggleOn = document.querySelector('.toggle__on');
const toggleOff = document.querySelector('.toggle__off');

toggle.addEventListener('click', (event) => {
    if (toggleOn.className.includes('toggle__color')) {
        toggleOn.classList.remove('toggle__color');
    } else {
        toggleOn.classList.add('toggle__color');
    }
    if (toggleOff.className.includes('toggle__color')) {
        toggleOff.classList.remove('toggle__color');
    } else {
        toggleOff.classList.add('toggle__color');
    }
})