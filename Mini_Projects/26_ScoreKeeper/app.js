const scoreA = document.querySelector('#scoreA');
const scoreB = document.querySelector('#scoreB');
const buttonA = document.querySelector('#getA');
const buttonB = document.querySelector('#getB');

const targetScore = document.querySelector('#target');

let isEnd = false;

buttonA.addEventListener('click', (e) => {
    let currentA = parseInt(scoreA.innerText);

    currentA += 1;
    scoreA.innerText = `${currentA}`;

    if (targetScore.value === scoreA.innerText) isEnd = true;
    printWin();    
    
})

buttonB.addEventListener('click', (e) => {
    let currentB = parseInt(scoreB.innerText);

    currentB += 1;
    scoreB.innerText = `${currentB}`;
    
    if (targetScore.value === scoreB.innerText) isEnd = true;
    printWin();
})

const printWin = () => {
    const status = document.querySelector('#status');
    if (parseInt(scoreA.innerText) > parseInt(scoreB.innerText)) {
        status.innerText = '왼쪽이 이기는 중!';
        if (isEnd) status.innerText = '왼쪽 승!'
    }
    else if (parseInt(scoreA.innerText) < parseInt(scoreB.innerText)) {
        status.innerText = '오른쪽이 이기는 중!';
        if (isEnd) status.innerText = '오른쪽 승!'
    }
    else {
        status.innerText = '동점!';
        if (isEnd) status.innerText = '비김!'
    }

    
}