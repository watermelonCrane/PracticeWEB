const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const targetSelect = document.querySelector('#targetScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;

        if (winningScore === p1Score) {
            isGameOver = true;
            p1Button.classList.add('is-light');
            p1Button.classList.remove('has-text-white');
            p2Button.classList.add('is-light');
            p2Button.classList.remove('has-text-white');

            p1Display.classList.add('has-text-primary');
            p2Display.classList.add('has-text-danger');

        }
    }

})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;

        if (winningScore === p2Score) {
            isGameOver = true;
            p1Button.classList.add('is-light');
            p1Button.classList.remove('has-text-white');
            p2Button.classList.add('is-light');
            p2Button.classList.remove('has-text-white');

            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-primary');
        }
    }

})

resetButton.addEventListener('click', function () {
    isGameOver = false;
    p1Score = p2Score = 0;
    p1Display.textContent = p2Display.textContent = 0;

    p1Button.classList.remove('is-light');
    p1Button.classList.add('has-text-white');
    p2Button.classList.remove('is-light');
    p2Button.classList.add('has-text-white');

    p1Display.classList.remove('has-text-danger', 'has-text-primary');
    p2Display.classList.remove('has-text-danger', 'has-text-primary');
})


targetSelect.addEventListener('change', function () {
    winningScore = parseInt(targetSelect.value);
})