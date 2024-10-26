let section = document.querySelector("section")
let startButton = document.querySelector("#startButton")
let questionPole = document.querySelector("#questionPole")
let answerButton = document.querySelector("#answerButton")
let input = document.querySelector("input")
let gameScore = document.querySelector("#score")
let restart = document.querySelector("#restartGame")

const savollar = [
    { question: '2 * 2 = ?', answer: 4 },
    { question: '5 * 3 = ?', answer: 15 },
    { question: '8 + 4 = ?', answer: 12 },
    { question: '15 - 4 = ?', answer: 11 },
    { question: '7 - 3 = ?', answer: 4 },
    { question: '69 - 23 = ?', answer: 46 },
    { question: '35 * 2 = ?', answer: 70 },
    { question: '37 - 19 = ?', answer: 18 },
    { question: '25 + 18 = ?', answer: 43 },
    { question: '5 * 5 = ?', answer: 25 },
];

function startGame() {
    let randomQuestionNumber = Math.floor(Math.random() * 10);
    console.log(randomQuestionNumber);
    section.classList.remove('hidden')
    section.classList.add('flex')
    questionPole.textContent = savollar[randomQuestionNumber].question;
    score = 0;

    function answer() {
        if (input.value == savollar[randomQuestionNumber].answer) {
            score++;
            gameScore.textContent = score;
            input.value = '';
            randomQuestionNumber = Math.floor(Math.random() * 10);
            questionPole.textContent = savollar[randomQuestionNumber].question;
            questionUsed.push(savollar[randomQuestionNumber]);
        } else {
            input.value = '';
            randomQuestionNumber = Math.floor(Math.random() * 10);
            questionPole.textContent = savollar[randomQuestionNumber].question;
            questionUsed.push(savollar[randomQuestionNumber]);
        }
    }

    answerButton.addEventListener('click', answer)
}

function restartGame () {
    section.classList.remove('flex')
    section.classList.add('hidden')
}