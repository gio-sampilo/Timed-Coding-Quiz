//variables
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenQuestion = document.querySelector(".container");

var currentQuestion= {};
var score;
var timer;
var timerCount;
var questionCounter ;
var questionChosen = []
var questions =[

    {
        question: "DOM stands for:",
        a:"Don't Owe Money", 
        b:"Document Object Model", 
        c:"Digital Owner Manual",
        correct: "Document Object Model",
    },
    {
        question: "DOM stands for:",
        a:"Don't Owe Money", 
        b:"Document Object Model", 
        c:"Digital Owner Manual",
        correct: "Document Object Model",
    },
    {
        question: "DOM stands for:",
        a:"Don't Owe Money", 
        b:"Document Object Model", 
        c:"Digital Owner Manual",
        correct: "Document Object Model",
    },
    {
        question: "DOM stands for:",
        a:"Don't Owe Money", 
        b:"Document Object Model", 
        c:"Digital Owner Manual",
        correct: "Document Object Model",
    },
    {
        question: "DOM stands for:",
        a:"Don't Owe Money", 
        b:"Document Object Model", 
        c:"Digital Owner Manual",
        correct: "Document Object Model",
    }
]

function renderQuestion() {
    for (let i = 0; i < questions.length; i++)
    console.log(questions.question);
};

//Start game
function startGame() {
    noTimeLeft = false;
    timerCount = 60;
    startButton.disabled = false;
    questionChosen = [...questions];
    startButton.style.display = "none";
    startTimer()
    renderQuestion()
}

//Timer for game
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

//start button for game

startButton.addEventListener("click", startGame);

function questionCount(){
let count = 0
 count = count + 1
}

//Render question to page
function renderQuestion() {
var questionIndex = Math.floor(Math.random() * questionChosen.length);
currentQuestion = questionChosen[questionIndex];
chosenQuestion.textContent = currentQuestion.question;


}