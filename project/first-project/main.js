let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chance = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', () => {
    userInput.value = '';
})

function pickRandomNum() {
    computerNum = Math.floor((Math.random() * 100) + 1);
    console.log('정답', computerNum);
}

function play() {
    let userValue = Number(userInput.value);

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = '1부터 100사이의 숫자를 입력 해주세요!';
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해주세요!';
        return;
    }

    chance--;
    chanceArea.textContent = `남은 기회:${chance}번`;

    if (userValue < computerNum) {
        resultArea.textContent = 'UP!';
    } else if (userValue > computerNum) {
        resultArea.textContent = 'DOWN!';
    } else {
        resultArea.textContent = '정답!';
        gameOver = true;
    }

    history.push(userValue);

    if (chance < 1) {
        gameOver = true;
    }

    if (gameOver) {
        playButton.disabled = true;
    }
}

function reset() {
    history = [];
    chance = 5;
    userInput.value = '';
    pickRandomNum();
    resultArea.textContent = '결과값이 여기에 나옵니다!';
}

pickRandomNum();