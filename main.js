let current = 0;
const options = [...document.getElementsByClassName('option')];
document.querySelector('.prev').disabled = true

const next = () => {
    if (current < options.length - 1) {
        current++;
    }

    if (current === options.length - 1) {
        document.querySelector('.next').disabled = true
    }

    if (current > 0) {
        document.querySelector('.prev').disabled = false
    }

    options[current - 1].classList.add('animate-out');

    setTimeout(() => nextSelection(), 300);
}

const prev = () => {
    if (current > 0) {
        current--;
    }

    if (current === 0) {
        document.querySelector('.prev').disabled = true
    }

    if (current < options.length - 1) {
        document.querySelector('.next').disabled = false
    }

    options[current + 1].classList.add('animate-out');

    setTimeout(() => prevSelection(), 300);
}

function prevSelection() {
    options[current + 1].classList.add('hidden');
    options[current].classList.remove('hidden');
    options[current].classList.remove('animate-out');
    options[current].classList.add('animate-in');
}

function nextSelection() {
    options[current - 1].classList.add('hidden');
    options[current].classList.remove('hidden');
    options[current].classList.remove('animate-out');
    options[current].classList.add('animate-in');
}