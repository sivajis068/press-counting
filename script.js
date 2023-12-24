let count_button = document.querySelector('#btn-count');
let count_display = document.querySelector('.count-display');
let count_text = document.querySelector('.count-text');
let reset_button = document.querySelector('#btn-reset');

let count = 0;

count_button.addEventListener('click', function () {
    count_text.style.display = 'flex';
    count_button.style.backgroundColor = 'blue';
    count_button.style.color = 'white';
    count_text.style.fontSize = '20px';
    count_text.style.display = 'flex';
    count++;
    count_text.textContent = `count ${count}`;

    setTimeout(function () {
        count_button.style.backgroundColor = '';
        count_button.style.color = 'black';
    }, 100)
});

reset_button.addEventListener('click', function () {
    count = 0;
    count_text.textContent = `count ${count}`;
    reset_button.style.backgroundColor = 'red';

    setTimeout(function () {
        reset_button.style.backgroundColor = '';
    }, 100)
});