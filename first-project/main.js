let answer = 0;
let userInput = document.getElementById('user-input');
let inputArea = document.getElementById('play-button');
inputArea.addEventListener('click', check);
userInput.addEventListener('focus', function () {
    userInput.value = '';
})
let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);
let resultArea = document.getElementById('result-area');
let playButton = document.getElementById('play-button');
let chanceArea = document.getElementById('chance-area');
let chance = 5;
let history = [];

function createRandom() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`정답 ${randomNum}`);
    answer = randomNum;
}

function check() {
    let userInputValue = Math.floor(userInput.value);
    // 유효성 체크
    if (userInputValue < 0 || userInputValue > 100) {
        resultArea.textContent = '다시 입력해주세요.';
        return;
    }

    if (userInputValue === answer) {
        resultArea.textContent = '정답!';
        playButton.disabled = true;
    } else {
        if (history.includes(userInputValue)) {
            resultArea.textContent = '이미 입력한 숫자입니다. 다시 입력해주세요!';
            return;
        } else {
            if (userInputValue < answer) {
                resultArea.textContent = 'UP!';
            } else {
                resultArea.textContent = 'DOWN';
            }
            history.push(userInputValue);
        }
    }

    chance -= 1;
    chanceArea.textContent = `남은기회:${chance}번`;

    if (chance === 0) {
        resultArea.textContent = '다시 시도해주세요..!';
        playButton.disabled = true;
    }

    console.log(history);
}

function reset() {
    playButton.disabled = false;
    resultArea.textContent = '';
    history = [];
    chance = 5;
    chanceArea.textContent = `남은기회:${chance}번`;
    createRandom();
}

createRandom();