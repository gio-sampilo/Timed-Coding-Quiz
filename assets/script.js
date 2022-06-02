var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenQuestion = document.querySelector(".container");

var scoreCounter;
var correctAns;
var incorrectAns;
var timer;
var timerCount;
var isWin = false;
var question;

var userSelect = "";
var gameQuestions = [

    {
        q: "Who?",
        ans1: 1,
        correctAnswer: "answer"
    },

    {
        q: "When?",
        ans1: 1,
        correctAnswer: "answer"

    },


    {
        q: "Where?",
        ans1: 1,
        correctAnswer: "answer"

    },


    {
        q: "What?",
        ans1: 1,
        correctAnswer: "answer"

    },


    {
        q: "Why?",
        ans1: 1,
        correctAnswer: "answer"
    }

];

console.log(gameQuestions);

// var gameAnswers = ["1", "2", "3", "4", "5"];

// var questionOne = [
// { 
// q: "What does Nan stand for?",
// pa1: "no and no",
// pa2: "Not a Number",
// pa3: "Not a Nose",
// correct:"Not a Number"
// }    
// ]

function startGame() {
    isWin = false;
    timerCount = 60;
    startButton.disabled = false;
    startTimer()
    renderQuestion()
}

function renderQuestion() {
    // userSelect = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];

    for (var i = 0; i < gameQuestions.length; i++);

    var game = gameQuestions[i]
    var li = document.createElement("li");
    li.textContent = game

    // var question = gameQuestions[i].q;
    // chosenQuestion.textContent = gameQuestions[i]; (main one)

    // var newQuestion = document.createElement("h2")
    // newQuestion.setAttribute("class", "question")
    // chosenQuestion.textContent = question;



}

console.log(renderQuestion);

startButton.addEventListener("click", startGame);

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

//   function printQuestionAnswers () {


//   }