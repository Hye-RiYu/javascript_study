// 랜덤번호 지정
// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 3번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다 (기회를 깍지않음)
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다 (기회를 깍지않음)
// 반응형 UI


let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let result = document.getElementById("result");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];


playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus", function () {
    userInput.value = "";
});

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    // console.log(computerNum);
    result.textContent = computerNum;
}

function play() {
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요";
        return;
    }

    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`;
    console.log("chances", chances);

    if(userValue < computerNum) {
        resultArea.textContent = "UP!!!!!";
    }else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!!!";
    }else {
        resultArea.textContent = "That’s right";
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances < 1) {
        gameOver = true;
    }

    if(gameOver == true) {
        playButton.disabled = true;
    }

}

function reset() {
    // user input창이 깨끗하게 정리되어야 한다.
    userInput.value = "";
    // 새로운 랜덤번호 생성
    pickRandomNum();

    resultArea.textContent = "Game Start!!!";
    gameOver = false;
    playButton.disabled = false;
    chances = 3;
    chanceArea.innerHTML = `남은 기회: ${chances}`;
    userValueList = [];
}

pickRandomNum();



