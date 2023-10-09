const startbtn = document.getElementById("start");
const quizquestions = document.getElementById("questions");
var score = 0;
var timeleft = 60;
var QI = 0;
var highScoreArr = JSON.parse(localStorage.getItem("highscores")) || [];

const questionArr = [
  {
    question: "1. There are how many types of data in Javascript?",
    answers: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question:"2. What math function would you use to create a random whole number?",
    answers: [
      "Math.floor(Math.random()*10)",
      "Math.random(Math.floor()*10)",
      "Math.ceil(Math.random()",
      "Math.random(Math.ceil()*10)",
    ],
    correctAnswer: "Math.floor(Math.random()*10)",
  },
  {
    question: "3. What synbol is used to call a function after its name?",
    answers: ["{}", "()", "//", "="],
    correctAnswer: "()",
  },
  {
    question: "4. What symbol is used in a variable declaration?",
    answers: [":", ";", "=", "=="],
    correctAnswer: "=",
  },
  {
    question: "5. What does the triple equal sign mean?",
    answers: [
      "Equal",
      "Equal in type and value",
      "Equal in type",
      "Equal in number",
    ],
    correctAnswer: "Equal in type and value",
  },
  {
    question: "6. What is the syntax for writing an if statement?",
    answers: [
      "if {condition} (execute code)",
      "if [condition] {execute code}",
      "if {condition} [execute code]",
      "if (condition) {execute code}",
    ],
    correctAnswer: 'if (condition) {execute code}',
  },
  {
    question: "7. Which sign means 'OR'",
      answers: [ '&&', '\\', '!==', '||', ],
      correctAnswer: '||',
  },
  {
    question: "8. Which sign means not equal to?",
      answers: [ '&&', '\\', '!==', '||', ],
      correctAnswer: '!==',
  },
  {
    question: "9. What is the proper syntax for the 'getElementById' method?",
      answers: [ 'getelementbyid{"element"}',
                 'getElementById("element")',
                 'getElementById("#element")',
                 'getelementbyid["element"]',
  ],
      correctAnswer: 'getElementById("element")',
  },
  {
    question: "10. What symbol separates key-value pairs in an object?",
      answers: [ ',', ';', ':', '{}',
  ],
      correctAnswer: ',', 
  },
  {
    question: "11. A method is?",
      answers: [ 'A variable inside an object',
                'A function inside an object',
                'A function inside a variable',
                'A global variable',
  ],
      correctAnswer: 'A function inside an object', 
  },
  {
    question: "12. A global variable is?",
      answers: [ 'A variable inside an object',
                'A variable that can be used anywhere in the world',
                'A variable that can be accessed from anywhere in the program',
                'A local variable',
  ],
      correctAnswer: 'A variable that can be used from anywhere in the program', 
  },
  {
    question: "14. What symbol is used to hold data in an Array?",
      answers: [ '{}', '()', '//', '[]',
  ],
      correctAnswer: '[]',
  },
  {
    question: "15. What symbol is used to comment out multiple lines of code?",
      answers: [ '//', '\\', '/*', '*/', 'both c and d'
  ],
      correctAnswer: 'both c and d',
  },
];
startbtn.addEventListener("click", startQuiz);
// quizquestions.addEventListener('click', generatequestions);

function startQuiz() {
  startbtn.style.display = 'none';
  displayQuestion();
  console.log(questionArr);
}
function displayQuestion() {
  quizquestions.textContent = questionArr[QI].question;
  var buttonBox = document.getElementById("btn-box");
  buttonBox.innerHTML = "";
  questionArr[QI].answers.forEach((answer) => {
    var btn = document.createElement("button");
    btn.textContent = answer;
    btn.setAttribute("value", answer);
    btn.onclick = function () {
      if (this.value === questionArr[QI].correctAnswer) {
        score++;
      } else {
        timeleft -= 10;
      }
      QI++;
      if (QI === questionArr.length) {
        endGame();
      } else {
        displayQuestion();
      }
    };
    buttonBox.appendChild(btn);
  });
}
function endGame() {
  document.getElementById("quiz-box").innerHTML = "";
  var myscore = 10;
  var initials = "mrr";
  var scoreobject = {
    myscore,
    initials,
  };
  highScoreArr.push(scoreobject);
  localStorage.setItem("highscores", JSON.stringify(highScoreArr));
}
highScoreArr.sort((a, b) => {
  return b.myscore - a.myscore;
});


